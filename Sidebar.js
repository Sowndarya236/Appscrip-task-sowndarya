import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/wishlist">Wishlist</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
