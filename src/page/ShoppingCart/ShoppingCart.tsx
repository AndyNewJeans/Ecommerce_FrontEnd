// ShoppingCart.js
import React, { useContext } from "react";
import {  Container, Grid } from "@mui/material";
import ShoppingCartItem from "./Components/ShoppingCartItem.tsx";
import OrderSummaryItem from "./Components/OrderSummary.tsx";
import Navbar from "../../Components/Navbar/Navbar.tsx";
import { CartContext } from "../../CartContext.tsx";
import ShoppingCartItemBox from "./Components/ShoppingCartItemBox.tsx";
import Product from "../../Components/Navbar/Components/Product.tsx";

const ShoppingCart = () => {
    const { cartDataList } = useContext(CartContext);
    const isCartEmpty = cartDataList.length === 0;

return (
    <Container component="section" maxWidth="lg">
        <Navbar />
        <section className='cart'>
            <div className='cart-content'>
                {!isCartEmpty ? (
                    <ShoppingCartItemBox cartDataList={cartDataList}/>
                ) : (
                    <p className='empty'>Your Cart Is Empty</p>
                )}
            </div>
            <Grid item xs={12} md={5}>
                <OrderSummaryItem cartDataList={cartDataList} />
            </Grid>
        </section>
    </Container>
);
};

export default ShoppingCart;
