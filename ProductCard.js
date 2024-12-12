
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import "./ProductCard.css";

function ProductGrid({ addToCart, addToWishlist }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price.toFixed(2)}</p>
          <div className="actions">
            <button onClick={() => addToWishlist(product)}>
              <FaHeart /> Wishlist
            </button>
            <button onClick={() => addToCart(product)}>
              <FaCartPlus /> Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
