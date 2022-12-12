import { Card, ListGroup, Button } from "react-bootstrap";
import Item from "./Item";
import AddBtn from "./AddBtn";
import { useContext } from "react";
import { listContextStates } from "./App";
import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";

const List = () => {
  const { items } = useContext(listContextStates);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>To-Do List</Card.Header>
      <ListGroup variant="flush">
        {items.map((item) => {
          return <Item key={item.id} item={item.task} />;
        })}
      </ListGroup>
    </Card>
  );
};

export default List;
