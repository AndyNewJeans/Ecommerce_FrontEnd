import Product from './Product.tsx';
import { CartItemDto } from '../../../data/CartItemDto.ts';
import {useNavigate} from "react-router-dom";

type Props = {
    cartDataList: CartItemDto[];
};

const Cart = ({ cartDataList,}: Props) => {
    const isCartEmpty = cartDataList.length === 0;
    const navigate = useNavigate();

    return (
        <section className='cart'>
            {/* Cart Header */}
            <div className='head'>
                <p>Cart</p>
            </div>
            <hr />
            {/* Cart Content */}
            <div className='cart-content'>
                {!isCartEmpty ? (
                    <>
                        {cartDataList.map((item) => (
                            <Product key={item.product.pid} cartItemDto={item}/>
                        ))}
                        <button
                            className='checkout'
                            onClick={() => navigate("/cart")} // Change this to your checkout route
                        >
                            checkout
                        </button>
                    </>
                ) : (
                    <p className='empty'>Your Cart Is Empty</p>
                )}
            </div>
        </section>
    );
};

export default Cart;
