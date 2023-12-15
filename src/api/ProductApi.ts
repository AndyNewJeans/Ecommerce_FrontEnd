import {ProductDto} from "../data/ProductDto.ts";
import axios from 'axios';

export async function getAllProduct():Promise<ProductDto[]>{
    try{
    const response = await axios.get<ProductDto[]>('http://localhost:8080/public/product');
    return response.data;
    }
    catch(err){
        console.error(err);
        throw err;
    }
}

export async function getProductDetail(pid:string):Promise<ProductDto[]>{
    try{
        const response = await axios.get<ProductDto[]>(`http://localhost:8080/public/product/${pid}`);
        return response.data;
    }
    catch(err){
        console.error(err);
        throw err;
    }
}