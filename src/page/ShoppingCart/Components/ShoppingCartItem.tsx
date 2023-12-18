import React from "react";
import { styled } from '@mui/material/styles';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// Styled components
const StyledCard = styled(Card)({
    display: "flex",
    marginTop: 15
});

const StyledCardContent = styled(CardContent)({
    flex: "1 0 auto"
});

const StyledCardMedia = styled(CardMedia)({
    width: 151
});

const StyledTypography = styled(Typography)({
    fontWeight: "bold"
});

export default function ShoppingCartItem() {
    return (
        <StyledCard>
            <StyledCardMedia
                image="https://source.unsplash.com/random"
                title="Live from space album cover"
            />
            <StyledCardContent>
                <Typography color="textSecondary" gutterBottom>
                    Category
                </Typography>
                <Typography variant="h5" component="h2">
                    Item Name
                </Typography>
                <hr />
                <Grid container>
                    {/* ... Grid Items for Size, Quantity, and Price */}
                </Grid>
            </StyledCardContent>
        </StyledCard>
    );
}
