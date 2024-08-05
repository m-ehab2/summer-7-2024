import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
export default function Product({
  productName,
  count,
  handleDelete,
  id,
  handleAdd,
}) {
  const name = productName;
  const [counter, setCounter] = useState(count);
  const handleClick = (number) => {
    setCounter(counter + number);
  };
  return (
    <div className="d-flex m-2 align-items-center">
      <h3 className="m-2">{name}</h3>
      <button
        onClick={() => handleAdd(id, -1)}
        className="btn btn-warning"
        disabled={count === 0}
      >
        -
      </button>
      <div className="m-2">{count}</div>
      <button onClick={() => handleAdd(id, 1)} className="btn btn-success">
        +
      </button>
      <button
        onClick={() => handleAdd(id, 10)}
        className="btn btn-success mx-1"
      >
        +10
      </button>
      <button onClick={() => handleDelete(id)} className="btn btn-danger mx-1">
        <MdDelete style={{ fontSize: "24px" }} />
      </button>
    </div>
  );
}
