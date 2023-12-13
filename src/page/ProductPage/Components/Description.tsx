import React from "react";
import QuantityButton from "./QuantityButton.tsx";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Description = ({ onQuant, onAdd, onRemove, onSetOrderedQuant }) => {
  return (
    <section className="description">
      <p className="pre">Fruit Store</p>
      <h1>余仁生 - 極品冰糖燕窩．小燕宴</h1>
      <p className="desc">
          -無添加人造色素及穩定劑
          -其品質管理體系更通過HACCP認證
          -每盒6樽 / 每樽淨重 28克
      </p>
      <div className="price">
        <div className="main-tag">
          <p>$50.00</p>
          <p>50%</p>
        </div>
        <s>$100.00</s>
      </div>
      <div className="buttons">
        <QuantityButton onQuant={onQuant} onRemove={onRemove} onAdd={onAdd} />
        <button
          className="add-to-cart"
          onClick={() => {
            onSetOrderedQuant(onQuant);
          }}
        >
            <FontAwesomeIcon icon={faCartShopping} beat />
          add to cart
        </button>
      </div>
    </section>
  );
};

export default Description;
