import { Card, ListGroup, Button } from "react-bootstrap";
import Item from "./Item";
import AddBtn from "./AddBtn";
import { useContext, useState } from "react";
import { listContextStates } from "./App";
import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";
import axios from "axios";

const List = () => {
  const { items, setItems, ApiUrl } = useContext(listContextStates);
  const [task, setTask] = useState("");

  const recordResponse = (e) => {
    setTask(e.target.value);
  };

  const addItemToApi = () => {
    let postData = axios.post(`${ApiUrl}/tasks`, { task: task });
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>
        <input onChange={recordResponse}></input>
        {/* <AddBtn onClick={submitResponse} /> */}
        <button onClick={addItemToApi}>Add Item</button>
      </Card.Header>
      <ListGroup variant="flush">
        {items.map((item) => {
          return <Item key={item.id} item={item.task} />;
        })}
      </ListGroup>
    </Card>
  );
};

export default List;
