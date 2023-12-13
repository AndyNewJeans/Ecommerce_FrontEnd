import React, { useState } from "react";
import "../../App.css";
import { Container } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar.tsx";
import Gallery from "./Components/Gallery.tsx";
import Description from "./Components/Description.tsx";
import MobileGallery from "./Components/MobileGallery.tsx";

function ProductPage() {
    const [quant, setQuant] = useState(0);
    const [orderedQuant, setOrderedQuant] = useState(0);

    const addQuant = () => {
        setQuant(quant + 1);
    };

    const removeQuant = () => {
        setQuant(quant - 1);
    };

    const resetQuant = () => {
        setQuant(0);
        setOrderedQuant(0);
    };
    return (
        <main className="ProductPage">
            <Container component="section" maxWidth={"lg"}>
                <Navbar onOrderedQuant={orderedQuant} onReset={resetQuant} />
                <section className="core">
                    <Gallery />
                    <MobileGallery />
                    <Description
                        onQuant={quant}
                        onAdd={addQuant}
                        onRemove={removeQuant}
                        onSetOrderedQuant={setOrderedQuant}
                    />
                </section>
            </Container>
        </main>
    );
}

export default ProductPage;