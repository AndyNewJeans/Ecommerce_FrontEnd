// import styled from '@emotion/styled'
import React from "react";
import { Box, styled, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import products from "../../data/api";

const StyledBox = styled(Box)({
    height: "200px",
    width: "100%",
    cursor: "pointer",
    transition: "transform 0.15s ease-in-out",
    '&:hover': {
        transform: "scale3d(1.05, 1.05, 1)"
    }
});
const StyledTypography = styled(Typography)({
    fontFamily: "Kumbh Sans",
    textShadow:'initial',
    background: "#ffeb3b",
    borderRadius: '16px',
    opacity: "0.8",
    textAlign: "center",
    textTransform: "uppercase",
    '&:hover': {
        backgroundColor:'#37474f',
        color:'#fff'
    }
});

const Categories = () => {
    const categoryData = [
        {
            id: 1,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png',
            text: 'Japan'
        },
        {
            id: 2,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png',
            text: 'China'
        },
        {
            id: 3,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/640px-Flag_of_New_Zealand.svg.png',
            text: 'New Zealand'
        }
    ];

    return (
        <Box sx={{ marginTop: "30px" }}>
            <Typography
                variant="h4"
                sx={{ textAlign: "center", marginBottom: "20px" , fontFamily: "Kumbh Sans",}}
            >
                Categories
            </Typography>

            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                {categoryData.map(({ id, image, text }) => (
                    <StyledBox
                        key={id}  // Unique key prop added here
                        sx={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <Link to={`/products/${text}`} style={{ textDecoration: 'none' }}>
                            <StyledTypography
                                color='#8bc34a'
                                sx={{
                                    fontSize: { xs: "2rem", sm: "1.5rem", md: "2rem" },
                                    margin: { xs: "25% 30px", sm: "50% 20px", md: "30% 50px" },
                                }}
                            >
                                {text}
                            </StyledTypography>
                        </Link>
                    </StyledBox>
                ))}
            </Stack>
        </Box>
    );
};

export default Categories;
