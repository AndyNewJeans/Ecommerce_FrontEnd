import React, {useContext, useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {CartContext} from "../../../CartContext.tsx";
import {useNavigate} from "react-router-dom";
import {CartItemDto} from "../../../data/CartItemDto.ts";

// Styled components
const StyledCard = styled(Card)({
    position: "sticky",
    top: "1rem",
    minWidth: "275px",
    elevation: 15
});
type Props = {
    cartDataList: CartItemDto[];
    checkout: ()=>void;
    isCheckoutState: boolean
}


const OrderSummaryItem = ({ cartDataList, checkout, isCheckoutState }: Props) => {
    const totalPrice = cartDataList.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
    }, 0);

    return (
                <section className='cart'>
                    <div className='cart-content'>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={checkout}
                            disabled={isCheckoutState} // Disable button based on isCheckoutState
                        >
                            Checkout
                        </Button>
                    </div>
                </section>
    );
};

export default OrderSummaryItem;
