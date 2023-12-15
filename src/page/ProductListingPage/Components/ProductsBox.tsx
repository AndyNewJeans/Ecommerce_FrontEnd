import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Products from "./Products.tsx";
import { ProductDto } from "../../../data/ProductDto.ts";
import Loading from "../../../Components/Loading.tsx";

type Props = {
    products: ProductDto[];
};

export default function ProductsBox({ products }: Props) {
    return (
        <Box sx={{ marginTop: "20px" }}>
            <Typography
                variant="h4"
                sx={{ textAlign: "center", marginBottom: "20px", fontFamily: "Kumbh Sans" }}
            >
                Products
            </Typography>
            {products ? (
                <Grid container>
                    {products.slice(0, 10).map((product) => (
                        <Products product={product} key={product.pid} />
                    ))}
                </Grid>
            ) : (
                <Loading />
            )}

        </Box>
    );
}
