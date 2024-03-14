import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

interface QuantityButtonProps {
    onQuant: number;
    onRemove: () => void;
    onAdd: () => void;
    onQuantityChange: () => void;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({ onQuant, onRemove, onAdd, onQuantityChange}) => {
  return (
    <div className="amount">
      <button className="minus" onClick={onRemove} onBlur={onQuantityChange} disabled={onQuant === 1}>
          <FontAwesomeIcon icon={faMinus} />
      </button>
      <p>{onQuant}</p>
      <button className="plus" onClick={onAdd} onBlur={onQuantityChange} disabled={onQuant === 100}>
          <FontAwesomeIcon icon={faPlus} beat />
      </button>
    </div>
  );
};

export default QuantityButton;
