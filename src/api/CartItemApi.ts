import axios from "axios";
import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts"
import {CartItemDto} from "../data/CartItemDto.ts";
import getEnvConfig from "../config/EnvConfig.ts";

const baseUrl = getEnvConfig().baseUrl;
export const putCartItem = async (pid: string, quantity: number) => {
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();
        if (!accessToken) {
            throw new Error();
        }
        const config = {headers: {Authorization: `Bearer ${accessToken}`}}
        await axios.put(`${baseUrl}/cart/${pid}/${quantity}`, null, config);
    } catch (error){
        console.error(error);
        throw error;
    }
}

export const getCartItemList = async():Promise<CartItemDto[]> => {
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();
        if (!accessToken) {
            throw new Error();
        }
        const config = {headers: {Authorization: `Bearer ${accessToken}`}}
        const repsonse = await axios.get<CartItemDto[]>(`${baseUrl}/cart`, config);
        return repsonse.data;
    } catch (error){
        console.error(error);
        throw error;
    }
}

export const patchCartItem = async (pid: number, quantity: number) => {
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();
        if (!accessToken) {
            throw new Error();
        }
        const config = {headers: {Authorization: `Bearer ${accessToken}`}}
        await axios.patch(`${baseUrl}/cart/${pid}/${quantity}`, null, config);
    } catch (error){
        console.error(error);
        throw error;
    }
}

export const deleteCartItem = async (pid: number) => {
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();
        if (!accessToken) {
            throw new Error();
        }
        const config = {headers: {Authorization: `Bearer ${accessToken}`}}
        await axios.delete(`${baseUrl}/cart/${pid}`, config);
    } catch (error){
        console.error(error);
        throw error;
    }
}