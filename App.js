
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductCard";
import Wishlist from "./components/Wishlist";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const addToWishlist = (product) => {
    setWishlist((prev) => [...prev, product]);
  };

  return (
    <Router>
      <div className="app">
        <Header cartCount={cart.length} wishlistCount={wishlist.length} />
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={<ProductGrid addToCart={addToCart} addToWishlist={addToWishlist} />}
          />
          <Route path="/wishlist" element={<Wishlist wishlist={wishlist} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
