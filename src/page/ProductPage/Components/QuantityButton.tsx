import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
const QuantityButton = ({ onQuant, onRemove, onAdd }) => {
  return (
    <div className="amount">
      <button className="minus" onClick={onRemove} disabled={onQuant === 0}>
          <FontAwesomeIcon icon={faMinus} />
      </button>
      <p>{onQuant}</p>
      <button className="plus" onClick={onAdd} disabled={onQuant === 100}>
          <FontAwesomeIcon icon={faPlus} beat />
      </button>
    </div>
  );
};

export default QuantityButton;
