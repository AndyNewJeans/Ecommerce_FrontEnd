import React, { useState } from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    styled,
    Typography,
} from "@mui/material";
import { Link,} from "react-router-dom";
import {ProductDto} from "../../../data/ProductDto.ts";

const StyledCard = styled(Card)({
    backgroundColor:'#8bc34a',
    transition: "transform 0.15s ease-in-out",
    '&:hover': {
        transform: "scale3d(1.05, 1.05, 1)"
    }
});

const StyledTypography = styled(Typography)({
    fontSize:'18px',overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    fontFamily: "Kumbh Sans"
});
type Props = {
    product: ProductDto;
}
const Products = ({product}:Props) => {
    return (
                    <Grid item md={3} sm={4} xs={12} key={product.pid} >
                        <Link to={`/product/${product.pid}`} style={{textDecoration:'none'}}>
                            <StyledCard sx={{ maxWidth: 345, m:{xs:2,sm:1}  }}>
                                <CardMedia
                                    component="img"
                                    height="260"
                                    image={product.image_url}
                                    alt="green iguana"
                                    sx={{p:1, backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                        backgroundSize: "cover"}}

                                />
                                <CardContent sx={{height:'80px'}}>
                                    <StyledTypography gutterBottom variant="h5" component="div">
                                        {product.name}
                                    </StyledTypography>
                                </CardContent>
                                <StyledTypography>
                                <CardActions sx={{display:'flex', justifyContent:'space-between'}}>
                                    <Button size="small" >HKD {product.price}</Button>
                                    <Button size="small">
                                        {product.has_stock ? "has stock" : "out of stock"}
                                    </Button>
                                </CardActions>
                                </StyledTypography>
                            </StyledCard>
                        </Link>
                    </Grid>
    );
};

export default Products;
