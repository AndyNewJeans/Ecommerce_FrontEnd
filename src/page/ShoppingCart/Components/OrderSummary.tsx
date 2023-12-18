import React from "react";
import { styled } from '@mui/material/styles';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// Styled components
const StyledCard = styled(Card)({
    position: "sticky",
    top: "1rem",
    minWidth: "275px",
    elevation: 15
});

const StyledTypographyTitle = styled(Typography)({
    fontSize: 14
});

const StyledTypographySubtitle = styled(Typography)({
    marginBottom: 12
});

export default function OrderSummaryItem() {
    return (
        <StyledCard>
            <CardContent>
                <StyledTypographyTitle
                    color="textSecondary"
                    gutterBottom
                >
                    Shopping Cart
                </StyledTypographyTitle>
                <Typography variant="h5" component="h1">
                    Order Summary
                </Typography>
                <hr />
                <Grid container>
                    {/* ... Grid Items for Shipping and Total */}
                </Grid>
            </CardContent>

            <CardActions>
                <Button size="large" color="secondary">
                    BUY NOW ({1})
                </Button>
            </CardActions>
        </StyledCard>
    );
}
