
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../pages/Login/Login/Login"
import Blog from "../../pages/Blog/Blog";
import Courses from "../../pages/Courses/Courses";
import Faq from "../../pages/Faq/Faq";
import Home from "../../pages/Shared/Home/Home";
import Register from "../../pages/Login/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/categories')
            },
            {
                path: '/faq', element: <Faq></Faq>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Register></Register>
            }

        ]


    }

])
