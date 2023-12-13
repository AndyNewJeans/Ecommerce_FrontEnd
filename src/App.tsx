import React from "react";
import ProductPage from "./page/ProductPage"
import Home from "./page/ProductListingPage"
import {
    createBrowserRouter, Route,
    RouterProvider,
} from "react-router-dom";
import Login from "./page/LoginPage/Login";
import SignUp from "./page/LoginPage/SignUp";
import Checkout from "./page/Checkout/Checkout.tsx";
import Error from "./page/Error/Error.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path:"/product",
        element:<ProductPage/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/signup",
        element:<SignUp/>
    },
    {
        path:"/checkout",
        element:<Checkout/>
    },
    {
        path:"/404",
        element:<Error/>
    },
]);

function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default App;
