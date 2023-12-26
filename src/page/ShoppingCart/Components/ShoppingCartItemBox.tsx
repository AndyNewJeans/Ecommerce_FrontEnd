import {Box, Grid, Typography} from "@mui/material";
import Loading from "../../../Components/Loading.tsx";
import React from "react";
import ShoppingCartItem from "./ShoppingCartItem.tsx";
import {CartItemDto} from "../../../data/CartItemDto.ts";

type Props = {
    cartDataList: CartItemDto[];
}

const ShoppingCartItemBox = ({ cartDataList }: Props) => {
    return (
        <Box sx={{ marginTop: "20px" }}>
            <Typography
                variant="h4"
                sx={{ textAlign: "center", marginBottom: "20px", fontFamily: "Kumbh Sans" }}
            >
                Cart
            </Typography>
            {cartDataList ? (
                <Grid container>
                    {cartDataList.slice(0, 10).map((cartItem) => (
                        <ShoppingCartItem cartItemDto={cartItem} key={cartItem.product.pid} />
                    ))}
                </Grid>
            ) : (
                <Loading />
            )}

        </Box>
    );
}

export default ShoppingCartItemBox;