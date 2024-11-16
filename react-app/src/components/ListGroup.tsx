function ListGroup() {
  const items = ["New York", "Addis Ababa", "London", "Rome"];

  return (
    <>
      <h1>hello list</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
