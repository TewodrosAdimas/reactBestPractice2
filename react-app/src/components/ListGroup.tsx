import { MouseEvent, useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {
  const message = items.length === 0 && <p>No Item</p>;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {message}
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
