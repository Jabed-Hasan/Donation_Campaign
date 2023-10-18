import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CardDetails from "../pages/CardDetails/CardDetails";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('Donar.json')
            },

            {
                path: "/Donation",
                element: <Donation></Donation>
            },

            {
                path: "/Statistics",
                element: <Statistics></Statistics>
            },

            {
                path: "/Details/:id",
                element: <CardDetails></CardDetails>,
                loader: () => fetch('Donar.json')

            }

        ]
    }
])



export default myCreatedRoute;

