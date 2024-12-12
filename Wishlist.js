
import React from "react";
import "./Wishlist.css";

function Wishlist({ wishlist }) {
  return (
    <div className="wishlist">
      <h2>Your Wishlist</h2>
      {wishlist.length > 0 ? (
        <ul>
          {wishlist.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
}

export default Wishlist;
