import React, { useState, useEffect } from "react";
import "../../App.css";
import { Container } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar.tsx";
import Gallery from "./Components/Gallery.tsx";
import Description from "./Components/Description.tsx";
import { useParams, useNavigate } from "react-router-dom";
import { ProductDetailDto } from "../../data/ProductDto.ts";
import * as ProductApi from "../../api/ProductApi.ts";

function ProductPage() {
    const [quant, setQuant] = useState(0);
    const { productId } = useParams();
    const [productDetail, setProductDetail] = useState<ProductDetailDto | undefined>(undefined);
    const navigate = useNavigate();

    const addQuant = () => {
        setQuant(quant + 1);
    };

    const removeQuant = () => {
        setQuant(quant > 0 ? quant - 1 : 0);
    };

    const getProductDetail = async () => {
        try {
            const data = await ProductApi.getProductDetail(productId);
            setProductDetail(data);
        } catch (err) {
            navigate("/404");
        }
    };

    useEffect(() => {
        if (productId) {
            getProductDetail();
        } else {
            navigate("/404");
        }
    }, [productId]);

    return (
        <main className="ProductPage">
            <Container component="section" maxWidth={"lg"}>
                <Navbar />
                <section className="core">
                    {productDetail && (
                        <>
                            <Gallery productDetail={productDetail} />
                            <Description
                                onQuant={quant}
                                onAdd={addQuant}
                                onRemove={removeQuant}
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
