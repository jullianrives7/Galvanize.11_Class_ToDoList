import { ListGroup } from "react-bootstrap";
import { useContext } from "react";
import { listContextStates } from "./App";
import axios from "axios";

const Item = (props) => {
  const { ApiUrl, setRefreshData } = useContext(listContextStates);

  const handleClick = async () => {
    await axios.delete(`${ApiUrl}/tasks/${props.id}`);
    setRefreshData(true);
    console.log("deleted item");
  };

  return (
    <ListGroup.Item>
      {props.item}{" "}
      <button class="align-right" onClick={handleClick}>
        Delete
      </button>
    </ListGroup.Item>
  );
};

export default Item;
