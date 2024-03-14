import { Box } from '@mui/material'
import { Container, Stack } from '@mui/system'
import {useEffect, useState} from 'react'
import HeroSection from './Components/HeroSection.tsx'
import "../../App.css"
import Navbar from "../../Components/Navbar/Navbar.tsx";
import * as ProductApi from '../../api/ProductApi.ts'
import ProductsBox from "./Components/ProductsBox.tsx";
import {useNavigate} from "react-router-dom";
import {ProductDto} from "../../data/ProductDto.ts";

const Home = () => {
    const [productList, setProductList] = useState<ProductDto[]>([]);
    const navigate = useNavigate();


    const getAllProduct = async () => {
        try{
        const data  = await ProductApi.getAllProduct();
        setProductList(data);
        }
        catch (err){
            navigate("/404");
        }
    }

    useEffect(()=>{
        getAllProduct();
    },[])

    return(
        <Container component="section" maxWidth={"lg"}>
        <Navbar/>
        <Box>
            <HeroSection />
            {/* <Container> */}
            <Stack>
                <ProductsBox products={productList}/>
            </Stack>
            {/* </Container> */}
        </Box>
        </Container>
    )
}

export default Home