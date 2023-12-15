import React, { useState, useEffect } from "react";
import "../../App.css";
import { Container } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar.tsx";
import Gallery from "./Components/Gallery.tsx";
import Description from "./Components/Description.tsx";
import {useNavigate, useParams} from "react-router-dom";
import mockData from "../../response.json";
import { ProductDetailDto } from "../../data/ProductDto.ts";
import * as ProductApi from "../../api/ProductApi.ts"
type Params = {
    productId: string;
}

function ProductPage() {
    const [quant, setQuant] = useState(0);
    const [orderedQuant, setOrderedQuant] = useState(0);
    const { productId } = useParams<Params>();
    const [productDetail, setProductDetail] = useState<ProductDetailDto | undefined>(undefined);
    const navigate = useNavigate();
    const addQuant = () => {
        setQuant(quant + 1);
    };

    const removeQuant = () => {
        setQuant(quant > 0 ? quant - 1 : 0);
    };
    const getProductDetail = async () => {
        try{
            const data  = await ProductApi.getProductDetail(productId);
            setProductDetail(data);
        }
        catch (err){
            navigate("/404");
        }
    }
    useEffect(() => {
        if(productId){
            getProductDetail(productId);
        } else {
            navigate("/404");
        }
    }, []);

    return (
        <main className="ProductPage">
            <Container component="section" maxWidth={"lg"}>
                <Navbar onOrderedQuant={orderedQuant} onReset={() => setQuant(0)} />
                <section className="core">
                    {productDetail && (
                        <>
                            <Gallery productDetail={productDetail} />
                            <Description
                                onQuant={quant}
                                onAdd={addQuant}
                                onRemove={removeQuant}
                                onSetOrderedQuant={setOrderedQuant}
                                productDetail={productDetail}
                            />
                        </>
                    )}
                </section>
            </Container>
        </main>
    );
}

export default ProductPage;
