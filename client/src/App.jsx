import React from "react";
import List from "./List";
import AddBtn from "./AddBtn";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const contextData = {
    items,
    setItems,
  };

  console.log("items: ", items);

  return (
    <listContextStates.Provider value={{ ...contextData }}>
      <div className="App">
        Hello World!
        <List />
        <AddBtn />
      </div>
    </listContextStates.Provider>
  );
}

export const listContextStates = React.createContext();
export default App;
