import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root.jsx";
import Home from "./pages/Home.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import AddProduct from "./components/AddProduct.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/add-product',
                element: <AddProduct/>
            }
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
    </StrictMode>
);
