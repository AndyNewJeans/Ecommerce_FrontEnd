import axios from "axios";
import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts"

const baseUrl = "http://localhost:8080"
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