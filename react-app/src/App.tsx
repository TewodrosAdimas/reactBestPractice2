import React, { useEffect, useState } from "react";
import axios from "axios";

interface User{
  id:number;
  name: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(res.data[0].name));
  });
  return <div></div>;
};

export default App;
