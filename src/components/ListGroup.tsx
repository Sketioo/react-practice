import { useState } from "react";

interface Props {
  items: string[];
  header: string;
  onSelectItem(item: string): void;
}

function ListGroup({ items, header, onSelectItem }: Props) {
  let [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{header}</h1>
      {items.length === 0 && <p>There is no item</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
