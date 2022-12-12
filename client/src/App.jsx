import React from "react";
import List from "./List";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [refreshData, setRefreshData] = useState(false);

  let ApiUrl = "https://mvp2-api.onrender.com";

  const contextData = {
    items,
    setItems,
    refreshData,
    setRefreshData,
    ApiUrl,
  };

  const getTasksFromApi = async () => {
    let getData = await axios.get(`${ApiUrl}/tasks`);
    setItems([...getData.data]);
  };

  useEffect(() => {
    getTasksFromApi();
    setRefreshData(false);
  }, [refreshData]);

  console.log("items: ", items);

  return (
    <listContextStates.Provider value={{ ...contextData }}>
      <div className="App">
        <List />
      </div>
    </listContextStates.Provider>
  );
}

export const listContextStates = React.createContext();
export default App;
