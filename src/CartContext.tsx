// CartContext.js
import React, { createContext, useState, useCallback } from 'react';
import * as CartItemApi from './api/CartItemApi';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartDataList, setCartDataList] = useState([]);

    const getShoppingCartDataList = useCallback(async () => {
        let isMounted = true; // Flag to track mounted state

        try {
            const data = await CartItemApi.getCartItemList();
            if (isMounted) {
                setCartDataList(data);
            }
        } catch (error) {
            console.error("Error fetching cart data:", error);
        }

        return () => {
            isMounted = false; // Set it to false when the component unmounts
        };
    }, []);

    return (
        <CartContext.Provider value={{ cartDataList, getShoppingCartDataList }}>
            {children}
        </CartContext.Provider>
    );
};
