import React, { useState } from "react";
import Product from "../Components/Product";
export default function Cart({
  products,
  handleAdd,
  handleDelete,
  handleReset,
}) {
  return (
    <div>
      <h1>Cart</h1>
      <button onClick={handleReset} className="btn btn-success">
        reset
      </button>
      <ul>
        {products.map((element) => (
          <Product
            key={element.id}
            productName={element.name}
            count={element.count}
            handleDelete={handleDelete}
            id={element.id}
            handleAdd={handleAdd}
          />
        ))}
      </ul>
    </div>
  );
}
