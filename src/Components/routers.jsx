import EmbedPageExample from "../Pages/EmbedPageExample";
import EmbedPageWithID from "../Pages/EmbedPageExample/EmbedPageWithID";
import Home from "../Pages/Home";
import { useRoutes } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../Pages/Login";
import PageNotFound from "../Pages/PageNotFound";
export default function Router() {
    let element = useRoutes([
        { path: '/login', element: <Login /> },
        {
            element: <NavBar />,
            children: [
                {
                    path: '/', element: <Home />,
                },
                {
                    path: '/embed_page_example', element: <EmbedPageExample />,
                    children: [
                        { path: ':id', element: <EmbedPageWithID /> },
                    ],
                },
            ]
        },
        { path: '/*', element: <PageNotFound /> },
    ]);
    return element;
}