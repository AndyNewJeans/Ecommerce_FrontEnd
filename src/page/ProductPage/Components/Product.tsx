import { IconButton } from "@mui/material";
import React from "react";
import thumb1 from "../../../Pictures/image-product-1-thumbnail.jpg";
import deleteIcon from "../../../Pictures/icon-delete.svg";

const PRICE = 50;

const Product = ({ onOrderedQuant, onReset }) => {
  return (
    <div className="product">
      <img src={thumb1} alt="product-thumbnail" />
      <div className="info">
        <p>余仁生 - 極品冰糖燕窩．小燕宴</p>
        <div className="price">
          <span> {`$${PRICE.toFixed(2)} x ${onOrderedQuant}`} </span>
          <span> {`$${(PRICE * onOrderedQuant).toFixed(2)}`} </span>
        </div>
      </div>
      <IconButton
        className="delete-button"
        size="small"
        disableRipple
        onClick={onReset}
      >
        <img src={deleteIcon} alt="delete-item" />
      </IconButton>
    </div>
  );
};

export default Product;
