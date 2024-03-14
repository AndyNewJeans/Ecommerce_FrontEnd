import React, {createContext, useEffect, useState} from "react";

import {
    RouterProvider,
} from "react-router-dom";

import {UserData} from "./data/UserDto.ts";
import * as FirebaseAuthService from "./authService/FirebaseAuthService.ts"
import { CartProvider } from './CartContext';
import router from "./config/ReactRouterConfig.tsx"

export const LoginUserContext = createContext<UserData|undefined|null>(undefined)



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
