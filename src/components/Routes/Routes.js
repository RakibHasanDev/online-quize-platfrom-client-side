import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blogs/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import { getData } from "../Loader/loader";
import QuizDetails from "../QuizeDetails/QuizDetails";
import Root from "../Root/Root";
import Statistics from "../Statistics/Statistics";


const router = createBrowserRouter([
    {
        path: '/',
        loader: getData,
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            { path: 'topics', element: <Home></Home> },
            {
                path: '/topic/:id',
                loader: async ({params}) => {
                    return fetch(` https://openapi.programming-hero.com/api/quiz/${params.id}`)
                    
                },
                element: <QuizDetails></QuizDetails>
                
            },
            {
                path: 'statistics',
                element: <Statistics></Statistics>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }

        ]
    },

])

export default router;