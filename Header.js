
import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "./Header.css";

function Header({ cartCount, wishlistCount }) {
  return (
    <header className="header">
      <h1 className="logo">E-Commerce</h1>
      <div className="icons">
        <div className="icon">
          <FaHeart />
          <span className="badge">{wishlistCount}</span>
        </div>
        <div className="icon">
          <FaShoppingCart />
          <span className="badge">{cartCount}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
