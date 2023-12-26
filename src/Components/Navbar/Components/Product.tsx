import React, {useContext} from 'react';
import { IconButton } from '@mui/material';
import deleteIcon from '../../../Pictures/icon-delete.svg';
import { CartItemDto } from '../../../data/CartItemDto.ts';
import * as CartItemApi from "../../../api/CartItemApi.ts";
import {LoginUserContext} from "../../../App.tsx";
import {CartContext} from "../../../CartContext.tsx";
import {useNavigate} from "react-router-dom";

type Props = {
    cartItemDto: CartItemDto;
    onReset: () => void; // Assuming this is a function to reset something in the parent component
};

const Product = ({ cartItemDto, onReset }: Props) => {
    // Use cartItemDto to get the price and ordered quantity
    const price = cartItemDto.product.price;
    const orderedQuant = cartItemDto.quantity;
    const loginUser = useContext(LoginUserContext);
    const { getShoppingCartDataList } = useContext(CartContext);
    const navigate = useNavigate();

    const handleDeleteCart = async () => {
        if (loginUser) {

        } else if (loginUser === null) {
            navigate('/login'); // Navigate to login page if user is not logged in
            return; // Prevent further execution
        }
        if (cartItemDto.product.pid) {
            await CartItemApi.deleteCartItem(cartItemDto.product.pid);
            getShoppingCartDataList(); // Refresh cart data
        }
    }

    return (
        <div className='product'>
            <img src={cartItemDto.product.imageUrl} alt='product-thumbnail' />
            <div className='info'>
                <div>{cartItemDto.product.name}</div>
                <div className='price'>
                    <div>{`$${price.toFixed(2)} x ${orderedQuant}`}</div>
                    <div>{`$${(price * orderedQuant).toFixed(2)}`}</div>
                </div>
            </div>
            <IconButton
                className='delete-button'
                size='small'
                disableRipple
                onClick={handleDeleteCart} // Assuming onReset needs an ID to identify which item to reset
            >
                <img src={deleteIcon} alt='delete-item' />
            </IconButton>
        </div>
    );
};

export default Product;
