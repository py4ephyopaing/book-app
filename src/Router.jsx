import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import Home from "./pages/Home";
import Discover from "./pages/Discover";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/discover",
        element: <Discover />
    },
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}