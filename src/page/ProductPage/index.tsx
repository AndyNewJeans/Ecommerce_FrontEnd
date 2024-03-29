import {useState, useEffect, useContext} from "react";
import "../../App.css";
import { Container } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar.tsx";
import Description from "./Components/Description.tsx";
import { useParams, useNavigate } from "react-router-dom";
import { ProductDetailDto } from "../../data/ProductDto.ts";
import * as ProductApi from "../../api/ProductApi.ts";
import * as CartItemApi from "../../api/CartItemApi.ts";
import {CartContext} from "../../CartContext.tsx";
import {LoginUserContext} from "../../App.tsx";

function ProductPage() {
    const [quant, setQuant] = useState(1);
    const [isAddingCart, setIsAddingCart] = useState<boolean>(false)
    const { productId } = useParams();
    const [productDetail, setProductDetail] = useState<ProductDetailDto | undefined>(undefined);
    const  loginUser  = useContext(LoginUserContext); // Assumed useContext is used here
    const { getShoppingCartDataList } = useContext(CartContext); // Assumed useContext is used here

    const navigate = useNavigate();

    const handleAddToCart = async () => {
        if (loginUser === null) {
            navigate('/login'); // Navigate to login page if user is not logged in
            return; // Prevent further execution
        }
        if (productId) {
            setIsAddingCart(true)
            await CartItemApi.putCartItem(productId, quant);
            setIsAddingCart(false)
            getShoppingCartDataList(); // Refresh cart data
        }
    };

    const addQuant = () => {
        setQuant(quant + 1);
    };

    const removeQuant = () => {
        setQuant(quant > 0 ? quant - 1 : 0);
    };

    const getProductDetail = async () => {
        try {
            // Check if productId is defined and is a string
            if (typeof productId === 'string') {
                const data = await ProductApi.getProductDetail(productId);
                setProductDetail(data);
            } else {
                // Handle the case where productId is undefined
                navigate("/404");
            }
        } catch (err) {
            navigate("/404");
        }
    };

    useEffect(() => {
        getProductDetail();
    }, [productId]);

    return (
        <main className="ProductPage">
            <Container component="section" maxWidth={"lg"}>
                <Navbar />
                <section className="core">
                    {productDetail && (
                        <>
                            <Description
                                onQuant={quant}
                                onAdd={addQuant}
                                onRemove={removeQuant}
                                productDetail={productDetail}
                                handleAddToCart={handleAddToCart}
                                isAddingCart={isAddingCart}
                            />
                        </>
                    )}
                </section>
            </Container>
        </main>
    );
}

export default ProductPage;
