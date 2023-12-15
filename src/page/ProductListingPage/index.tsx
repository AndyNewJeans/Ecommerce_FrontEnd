import { Box } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React, {useEffect, useState} from 'react'
import HeroSection from './Components/HeroSection.tsx'
import Categories from './Components/Categories.tsx'
import "../../App.css"
import Navbar from "../../Components/Navbar/Navbar.tsx";
import * as ProductApi from '../../api/ProductApi.ts'
import ProductsBox from "./Components/ProductsBox.tsx";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const [quant, setQuant] = useState(0);
    const [orderedQuant, setOrderedQuant] = useState(0);
    const [productList, setProductList] = useState();
    const navigate = useNavigate();

    const resetQuant = () => {
        setQuant(0);
        setOrderedQuant(0);
    };
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
        <Navbar onOrderedQuant={orderedQuant} onReset={resetQuant} />
        <Box>
            <HeroSection />
            {/* <Container> */}
            <Stack>
                <Box>
                    <Categories />
                </Box>
                <ProductsBox products={productList}/>
            </Stack>
            {/* </Container> */}
        </Box>
        </Container>
    )
}

export default Home