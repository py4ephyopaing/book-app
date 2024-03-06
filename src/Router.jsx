import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Category from "./pages/Category";
import Setting from "./pages/Setting";
import Author from "./pages/Author";
import Book from "./pages/Book";

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
        path: "/authors/:name",
        element: <Author />
    },
    {
        path: "/book/:name",
        element: <Book />
    }
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}