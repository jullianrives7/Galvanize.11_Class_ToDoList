import { Button } from "react-bootstrap";
import { useContext } from "react";
import { listContextStates } from "./App";

const AddBtn = () => {
  const { setItems, ApiUrl } = useContext(listContextStates);

  return <Button variant="outline-dark">Add Item</Button>;
};

export default AddBtn;
