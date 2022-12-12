import React from "react";
import List from "./List";
import AddBtn from "./AddBtn";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  let ApiUrl = "https://mvp2-api.onrender.com";

  const contextData = {
    items,
    setItems,
    ApiUrl,
  };

  const getTasksFromApi = async () => {
    let getData = await axios.get(`${ApiUrl}/tasks`);
    setItems([...getData.data]);
  };

  useEffect(() => {
    getTasksFromApi();
  }, []);

  console.log("items: ", items);

  return (
    <listContextStates.Provider value={{ ...contextData }}>
      <div className="App">
        <List />
        <AddBtn />
      </div>
    </listContextStates.Provider>
  );
}

export const listContextStates = React.createContext();
export default App;
