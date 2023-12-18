import React, {useContext} from "react";
import QuantityButton from "./QuantityButton.tsx";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductDetailDto } from "../../../data/ProductDto.ts";
import * as CartItemApi from "../../../api/CartItemApi.ts";
import {useParams} from "react-router-dom";
import { CartContext } from '../../../CartContext.tsx';

type Props = {
    productDetail: ProductDetailDto | undefined;
    onQuant: number;
    onAdd: () => void;
    onRemove: () => void;
}

const Description = ({ productDetail, onQuant, onAdd, onRemove }: Props) => {
    const { productId } = useParams();
    const { getShoppingCartDataList } = useContext(CartContext);

    const handleAddToCart = async () => {
        if (productId) {
            await CartItemApi.putCartItem(productId, onQuant);
            getShoppingCartDataList(); // Refresh cart data
        }
    };

    if (!productDetail) {
        return <div>Loading...</div>;
    }

    return (
        <section className="description">
            <p className="pre">Fruit Store</p>
            <h1>{productDetail.name}</h1>
            <p className="desc">{productDetail.description}</p>
            <div className="main-tag">${productDetail.price}</div>
            <div className="buttons">
                <QuantityButton onQuant={onQuant} onRemove={onRemove} onAdd={onAdd} />
                <button className="add-to-cart" onClick={handleAddToCart}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    Add to Cart
                </button>
            </div>
        </section>
    );
};

export default Description;
