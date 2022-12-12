import { Card, ListGroup, Button } from "react-bootstrap";
import Item from "./Item";
import AddBtn from "./AddBtn";
import { useContext, useState } from "react";
import { listContextStates } from "./App";
import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";
import axios from "axios";

const List = () => {
  const { items, setItems, ApiUrl, setRefreshData } =
    useContext(listContextStates);

  const [task, setTask] = useState("");

  const recordResponse = (e) => {
    setTask(e.target.value);
  };

  const addItemToApi = async () => {
    let postData = await axios.post(`${ApiUrl}/tasks`, { task: task });
    setRefreshData(true);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>
        <input onChange={recordResponse}></input>
        <button onClick={addItemToApi}>Add Item</button>
      </Card.Header>
      <ListGroup variant="flush">
        {items.map((item) => {
          return <Item key={item.id} item={item.task} id={item.id} />;
        })}
      </ListGroup>
    </Card>
  );
};

export default List;
