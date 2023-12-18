import React from "react";
import QuantityButton from "./QuantityButton.tsx";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductDetailDto } from "../../../data/ProductDto.ts";
import * as CartItemApi from "../../../api/CartItemApi.ts";

type Props = {
    productDetail: ProductDetailDto | undefined;
    onQuant: number;
    onAdd: () => void;
    onRemove: () => void;
    onSetOrderedQuant: (quantity: number) => void;
}

const Description = ({ onQuant, onAdd, onRemove, onSetOrderedQuant, productDetail }: Props) => {
    if (!productDetail) {
        return <div>Loading...</div>; // or any other placeholder
    }
    const putCartItem = async ()=> {
        await CartItemApi.putCartItem("1", 3);
    }
    const handleAddToCart = () => {
        // Call the function to update the ordered quantity
        onSetOrderedQuant(onQuant);
        putCartItem();

        // Optional: Reset the quantity after adding to cart
        // onRemove(); // Uncomment if you want to reset quantity to zero after adding to cart
    }


    return (
        <section className="description">
            <p className="pre">Fruit Store</p>
            <h1>{productDetail.name}</h1>
            <p className="desc">{productDetail.description}</p>
            <div className="main-tag">
                ${productDetail.price}
            </div>
            <div className="buttons">
                <QuantityButton onQuant={onQuant} onRemove={onRemove} onAdd={onAdd} />
                <button
                    className="add-to-cart"
                    onClick={handleAddToCart}
                >
                    <FontAwesomeIcon icon={faCartShopping} />
                    Add to Cart
                </button>
            </div>
        </section>
    );
};

export default Description;
