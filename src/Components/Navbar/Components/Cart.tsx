import React from 'react';
import Product from './Product.tsx';
import { CartItemDto } from '../../../data/CartItemDto.ts';

type Props = {
    cartDataList: CartItemDto[];
    onReset: (id: number) => void; // Assuming onReset needs an ID to reset a specific item
    onShow: (show: boolean) => void;
};

const Cart = ({ cartDataList, onReset, onShow }: Props) => {
    // Determine if the cart is empty based on the length of cartDataList
    const isCartEmpty = cartDataList.length === 0;

    return (
        <section className='cart'>
            <div className='head'>
                <p>Cart</p>
            </div>
            <hr />
            <div className='cart-content'>
                {!isCartEmpty ? (
                    <>
                        {cartDataList.map((item) => (
                            <Product key={item.product.pid} cartItemDto={item} onReset={onReset} />
                        ))}
                        <button
                            className='checkout'
                            onClick={() => {
                                onShow(false);
                            }}
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
