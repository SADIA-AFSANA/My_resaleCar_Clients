import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main"
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import ManageProducts from "../../Pages/Dashboard/ManageProducts/ManageProducts";
import MyBooking from "../../Pages/Dashboard/MyBooking/MyBooking";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Product from "../../Pages/Home/Home/Category/Product";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";

import PrivateRoute from "../PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }, {
                path: '/product',
                element: <Product></Product>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyBooking></MyBooking>
            },
            {
                path: '/dashboard/allusers',
                // element: <AllUsers></AllUsers>
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/managedproduct',
                element: <ManageProducts></ManageProducts>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://resell-assignment12-server.vercel.app/bookings/${params.id}`)
            },
        ]
    },
    {
        path: '*',
        element: <div
            className="h-[800px] flex justify-center items-center">
            <h1 className="text-3xl ">There are no data found</h1>
            <img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3g1u45I3mDLfRxnnxCjp8iTl2OXRZ_WlM5A&usqp=CAU" alt="" />
        </div>
    }
])
export default router;