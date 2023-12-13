import { Box } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React, {useState} from 'react'
import HeroSection from './Components/HeroSection.tsx'
import Categories from './Components/Categories.tsx'
import Products from './Components/Products.tsx'
import Newsletter from './Components/Newsletter.tsx'
import "../../App.css"
import Navbar from "../../Components/Navbar/Navbar.tsx";

const Home = () => {
    const [quant, setQuant] = useState(0);
    const [orderedQuant, setOrderedQuant] = useState(0);
    const resetQuant = () => {
        setQuant(0);
        setOrderedQuant(0);
    };
    return(
        <Container component="section" maxWidth={"lg"}>
        <Navbar onOrderedQuant={orderedQuant} onReset={resetQuant} />
        <Box>
            <HeroSection />
            {/* <Container> */}
            <Stack>
                <Box>
                    <Categories />
                </Box>
                <Box>
                    <Products />
                    <Newsletter />
                </Box>

            </Stack>
            {/* </Container> */}
        </Box>
        </Container>
    )
}

export default Home