import React from  "react"

const Cart = ({ cart }) => (
  <div className="cart">
    <h2>Your Cart</h2>
    <ul>
      {cart.map((item, index) => (
        <li key={index}>{item.title} - ${item.price.toFixed(2)}</li>
      ))}
    </ul>
  </div>
);

export default Cart;
