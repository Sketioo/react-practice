import React from "react";

interface Props {
  items: string[];
  onClear: () => void;
}

const Cart = ({ items, onClear }: Props) => {
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <h3>{item}</h3>
          </li>
        ))}
      </ul>
      <button type="submit" onClick={onClear}>Clear</button>
    </div>
  );
};

export default Cart;
