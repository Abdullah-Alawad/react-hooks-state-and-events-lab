import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const itemClass = inCart? "in-cart" : "";

  function switchCart(){
    setInCart((inCart) => !inCart);
  }

  const switchCarts = inCart? "Remove From Cart" : "Add to Cart";


  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={switchCart}>{switchCarts}</button>
    </li>
  );
}

export default Item;
