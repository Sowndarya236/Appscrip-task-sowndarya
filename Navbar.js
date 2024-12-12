import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ wishlistCount, cartCount }) => {
  return (
    <nav className="navbar">
      <h1>E-Commerce Store</h1>
      <div className="nav-icons">
        <div>
          <FaHeart /> Wishlist ({wishlistCount})
        </div>
        <div>
          <FaShoppingCart /> Cart ({cartCount})
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
