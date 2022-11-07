
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../pages/Login/Login/Login"
import Blog from "../../pages/Blog/Blog";
import Courses from "../../pages/Courses/Courses";
import Faq from "../../pages/Faq/Faq";
import Home from "../../pages/Shared/Home/Home";
import Register from "../../pages/Login/Register/Register";
import CourseView from "../../pages/CourseView/CourseView";
import Premium from "../../pages/Pre/Premium";
import Terms from "../../pages/Terms/Terms";
import Profile from "../../pages/Profile/Profile";


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
                loader: () => fetch('http://localhost:5000/course')
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
            },
            {
                path: '/course/:id',
                element: <CourseView></CourseView>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)

            },
            {
                path: '/premium/:id',
                element: <Premium></Premium>,
                loader: ({ params }) => fetch(`http://localhost:5000/premium/${params.id}`)
            },
            {
                path: '/terms', element: <Terms></Terms>
            },
            {
                path: '/profile', element: <Profile></Profile>
            }

        ]


    }

])
