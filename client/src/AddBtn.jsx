import { Button } from "react-bootstrap";
import { useContext } from "react";
import { listContextStates } from "./App";

const AddBtn = () => {
  const { setItems } = useContext(listContextStates);

  const handleClick = () => {
    setItems((prev) => [...prev, "nice"]);
    console.log("clicked");
  };

  return (
    <Button variant="outline-dark" onClick={handleClick}>
      Add Item
    </Button>
  );
};

export default AddBtn;
