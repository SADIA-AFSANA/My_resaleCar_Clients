import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main"
import Blog from "../../Pages/Blog/Blog";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyBooking from "../../Pages/Dashboard/MyBooking/MyBooking";
import Product from "../../Pages/Home/Home/Category/Product";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
        children: [
            {
                path: '/dashboard',
                element: <MyBooking></MyBooking>
            }
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