import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Category from "./pages/Category";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/discover",
        element: <Discover />,
    },
    {
        path: "/category",
        element: <Category />,
    }
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}