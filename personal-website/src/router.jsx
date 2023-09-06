import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./views/Home";
import About from "./views/About";
import Portfolio from "./views/Portfolio";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
            },
        ],
    },
]);

export default router;
