import React, {createContext, useEffect, useState} from "react";
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
import {UserData} from "./data/UserDto.ts";
import * as FirebaseAuthService from "./authService/FirebaseAuthService.ts"
import ShoppingCart from "./page/ShoppingCart/ShoppingCart.tsx";
import { CartProvider } from './CartContext';

export const LoginUserContext = createContext<UserData|undefined|null>(undefined)

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path:"/product/:productId",
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
        path:"/checkout/:transactionId",
        element:<Checkout/>
    },
    {
        path:"/404",
        element:<Error/>
    },
    {
        path:"/cart",
        element:<ShoppingCart/>
    }
]);

function App() {
    const [loginUser, setLoginUser] = useState<UserData | null | undefined>(undefined);

    useEffect(() => {
        FirebaseAuthService.handleOnAuthStateChanged(setLoginUser);
    }, []);

    return (
        <React.StrictMode>
            <CartProvider>
            <LoginUserContext.Provider value={loginUser}>
            <RouterProvider router={router} />
            </LoginUserContext.Provider>
            </CartProvider>
        </React.StrictMode>
    );
}

export default App;
