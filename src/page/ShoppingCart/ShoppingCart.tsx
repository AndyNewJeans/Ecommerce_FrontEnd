import React, {useEffect} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import OrderSummaryItem from "./Components/OrderSummary.tsx";
import ShoppingCartItem from "./Components/ShoppingCartItem.tsx";
import * as CartItemApi from "../../api/CartItemApi.ts"

export default function ShoppingCart() {
    const putCartItem = async ()=> {
        await CartItemApi.putCartItem("1", 3);
    }

    useEffect(()=>{
        putCartItem();
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={7} lg={7}>
                        <Grid container>
                            <Grid item xs>
                                <ShoppingCartItem />
                                <ShoppingCartItem />
                                <ShoppingCartItem />
                                <ShoppingCartItem />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={5} lg={5}>
                        <OrderSummaryItem />
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}