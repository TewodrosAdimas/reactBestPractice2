import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "Addis Ababa", "London", "Rome"];
  //   items = [];

  const message = items.length === 0 && <p>No Item</p>;
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      {message}
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" onClick={handleClick} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
