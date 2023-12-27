import {TransactionDto} from "../data/TransactionDto.ts";
import axios from "axios";
import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts";


const baseUrl = "http://localhost:8080"

export async function prepareTransaction(): Promise<TransactionDto> {
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();
        if (!accessToken) {
            throw new Error();
        }
        const config = {headers: {Authorization: `Bearer ${accessToken}`}}
        const repsonse = await axios.post<TransactionDto>(`${baseUrl}/transaction/prepare`, null, config);
        return repsonse.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getTransactionById(transactionId:string): Promise<TransactionDto>{
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();
        if (!accessToken) {
            throw new Error();
        }
        const config = {headers: {Authorization: `Bearer ${accessToken}`}}
        const repsonse = await axios.get<TransactionDto>(`${baseUrl}/transaction/${transactionId}`, config);
        return repsonse.data;
    } catch (error){
        console.error(error);
        throw error;
    }
}

export async function payTransactionById(transactionId:string): Promise<void>{
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();
        if (!accessToken) {
            throw new Error();
        }
        const config = {headers: {Authorization: `Bearer ${accessToken}`}}
        await axios.patch(`${baseUrl}/transaction/${transactionId}/pay`, null, config);
    } catch (error){
        console.error(error);
        throw error;
    }
}

export async function finishTransactionById(transactionId:string): Promise<void>{
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();
        if (!accessToken) {
            throw new Error();
        }
        const config = {headers: {Authorization: `Bearer ${accessToken}`}}
        await axios.patch<TransactionDto>(`${baseUrl}/transaction/${transactionId}/finish`, null, config);
    } catch (error){
        console.error(error);
        throw error;
    }
}
