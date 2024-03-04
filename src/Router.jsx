import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Category from "./pages/Category";
import Setting from "./pages/Setting";
import Author from "./pages/Author";

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
    },
    {
        path: "/settings",
        element: <Setting />
    },
    {
        path: "/authors/:id",
        element: <Author />
    }
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}