import { createContext, useState, useCallback, useEffect, ReactNode } from 'react';
import * as CartItemApi from './api/CartItemApi';
import { CartItemDto } from "./data/CartItemDto.ts"; // Import the CartItemDto type

interface CartContextType {
    cartDataList: CartItemDto[]; // Use the actual type here
    getShoppingCartDataList: () => Promise<void>;
}

const defaultContextValue: CartContextType = {
    cartDataList: [],
    getShoppingCartDataList: async () => { /* default function implementation */ },
};

export const CartContext = createContext<CartContextType>(defaultContextValue);

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartDataList, setCartDataList] = useState<CartItemDto[]>([]);

    const getShoppingCartDataList = useCallback(async () => {
        try {
            const data = await CartItemApi.getCartItemList();
            setCartDataList(data);
        } catch (error) {
            console.error("Error fetching cart data:", error);
        }
    }, []);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            if (isMounted) {
                await getShoppingCartDataList();
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [getShoppingCartDataList]);

    return (
        <CartContext.Provider value={{cartDataList, getShoppingCartDataList}}>
            {children}
        </CartContext.Provider>
    );
}