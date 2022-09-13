import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

const Cart = ({ cart, setCart, deleteById }) => {
  // state
  const [price, setPrice] = useState(0);

  // lifecycle methods
  useEffect(() => {
    _handlePrice();
  });

  // rendered html
  return (
    <article>
      <ul className="cards">{_renderCartItems()}</ul>
      <div className="total">
        <span>Total Price of your Cart: </span>
        <span>${price}</span>
      </div>
    </article>
  );

  // methods
  function _renderCartItems() {
    const items = cart.map((item) => <ListingCard key = {item.id} item = {item} deleteById={deleteById} /> 
      // <div className="cart_box" key={item.id}>
      //   <div className="cart_img">
      //     <img src={item.img} alt="" />
      //     <p>{item.title}</p>
      //   </div>
      //   <div>
      //     <span>{item.price}</span>
      //     <button onClick={() => _handleRemove(item.id)}>Remove</button>
      //   </div>
      // </div>
    )
    return items;
    }

    function _handleRemove(id) {
      const arr = cart.filter((item) => item.id !== id);
      setCart(arr);
      _handlePrice();
    };
  
    function _handlePrice() {
      let ans = 0;
      cart.forEach((item) => (ans += item.price));
      setPrice(ans);
    };

  };


export default Cart;
