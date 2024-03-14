import QuantityButton from "./QuantityButton.tsx";
import {faCartShopping, faSpinner} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductDetailDto } from "../../../data/ProductDto.ts";

type Props = {
    productDetail: ProductDetailDto | undefined;
    onQuant: number;
    onAdd: () => void;
    onRemove: () => void;
    handleAddToCart: () => Promise<void>;
    isAddingCart: boolean;
}

const Description = ({ productDetail, onQuant, onAdd, onRemove, handleAddToCart, isAddingCart}: Props) => {

    if (!productDetail) {
        return <div>Loading...</div>;
    }

    const renderSelectorAndButton = () => {

        if (productDetail?.stock > 0  && !isAddingCart) {
            return (
                <button className="add-to-cart" onClick={handleAddToCart}>
                    <FontAwesomeIcon icon={faCartShopping}/>
                    Add to Cart
                </button>
            )
        } else if (isAddingCart){
            return (
                <button disabled className="add-to-cart" onClick={handleAddToCart}>
                    <FontAwesomeIcon icon={faSpinner} spinPulse />
                    Adding to Cart...
                </button>
            )
        } else {
            return (
                <button disabled className="out-of-stock">
                    <FontAwesomeIcon icon={faCartShopping}/>
                    Out of Stock
                </button>
            )
        }
    }
    return (
        <section className="description">
            <p className="pre">Fruit Store</p>
            <h1>{productDetail.name}</h1>
            <img src={productDetail.image_url} alt={productDetail.name} style={{ height: '300px' }}/>
            <p className="desc">{productDetail.description}</p>
            <div className="main-tag">${productDetail.price}</div>
            <div className="buttons">
                <QuantityButton onQuant={onQuant} onRemove={onRemove} onAdd={onAdd} onQuantityChange={renderSelectorAndButton}/>
                {renderSelectorAndButton()}
            </div>
        </section>
    );
};

export default Description;
