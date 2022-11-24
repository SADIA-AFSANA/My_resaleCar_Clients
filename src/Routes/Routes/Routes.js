import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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