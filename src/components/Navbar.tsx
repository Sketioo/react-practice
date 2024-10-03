import React from "react";

interface Props {
  itemsCount: number;
}

const Navbar = ({ itemsCount }: Props) => {
  return (
    <div>
      <h2>Total items: {itemsCount}</h2>
    </div>
  );
};

export default Navbar;
