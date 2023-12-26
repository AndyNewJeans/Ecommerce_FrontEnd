import React, {useContext} from "react";
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
}

const OrderSumaryItem = ({ cartDataList }: Props) => {
    const navigate = useNavigate();
    const { getShoppingCartDataList } = useContext(CartContext);

    const totalPrice = cartDataList.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
    }, 0);

    return (

        <StyledCard>
            <CardContent>
                <Typography variant="h5" component="h1">
                    Order Summary
                </Typography>
                <hr />
                <Grid container>
                    Total: ${totalPrice.toFixed(2)}
                </Grid>
            </CardContent>

            <CardActions>
                <section className='cart'>
                <div className='cart-content'>
                <button
                    className='checkout'
                    onClick={() => navigate("/checkout")} // Change this to your checkout route
                >
                    checkout
                </button>
                </div>
                </section>
            </CardActions>
        </StyledCard>
    );
}
export default OrderSumaryItem;