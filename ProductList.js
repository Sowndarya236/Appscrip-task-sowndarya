import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert("Added to Cart!");
  };

  const addToWishlist = (product) => {
    setWishlist((prev) => [...prev, product]);
    alert("Added to Wishlist!");
  };

  return (
    <div className="product-list">
      {/* Cart Counter */}
      <div className="cart-counter">
        <h2>Items in Cart: {cart.length}</h2>
      </div>

      {/* Wishlist Counter */}
      <div className="wishlist-counter">
        <h2>Items in Wishlist: {wishlist.length}</h2>
      </div>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={addToCart}
          onAddToWishlist={addToWishlist}
        />
      ))}
    </div>
  );
};

export default ProductList;
