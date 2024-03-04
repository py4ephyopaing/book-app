import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Category from "./pages/Category";
import Setting from "./pages/Setting";

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
    }
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}