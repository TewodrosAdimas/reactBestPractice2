// import Message from "./message";

// function App(){
//   return <div> <Message/> </div>;
// }

// export default App;
import { useState } from "react";
import List1 from "./components/List1";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Addis Ababa", "London", "Rome"];

  return (
    <div>
      {" "}
      {/* <List1></List1> */}
      <ListGroup items={items} heading="Cities"></ListGroup>{" "}
    </div>
  );
}

export default App;
