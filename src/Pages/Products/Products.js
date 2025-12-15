import React, { useEffect, useState } from "react";
import "./Products.css";
import ProductCarousel from "../../Components/ProductCarousel/ProductCarousel";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Products() {
  const [product, setProduct] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  // 🔹 Load product
  useEffect(() => {
    async function getProduct() {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(res.data);
    }
    getProduct();
  }, [id]);

  // 🔹 Load cart from storage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(cart);
  }, []);

  // 🔹 Find this product in cart
  const cartItem = cartItems.find(item => item.id === product.id);

  // 🔹 Add to cart
  function addToCart() {
    let updated = [...cartItems];
    const index = updated.findIndex(item => item.id === product.id);

    if (index !== -1) {
      updated[index].quantity += 1;
    } else {
      updated.push({ ...product, quantity: 1 });
    }

    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  }

  // 🔹 Increase qty
  function increaseQty() {
    const updated = cartItems.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  }

  // 🔹 Decrease qty
  function decreaseQty() {
    const updated = cartItems.map(item =>
      item.id === product.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  }

  return (
    <div className="productPage d-flex mt-4 pt-4">
      <div className="productImageDiv halfDiv d-flex justify-content-center align-items-center">
        <ProductCarousel images={product.images || []} />
      </div>

      <div className="productInfoDiv halfDiv d-flex align-items-start">
        <div className="d-flex flex-column gap-3 p-5">
          <h1>{product.title}</h1>
          <h3>Price: ${product.price}</h3>
        
          <p>{product.description}</p>

          <div className="d-flex align-items-center gap-4">
            {/* ADD TO CART */}
           <button
                onClick={addToCart}
                className={`btn ${cartItem ? "btn-success" : "btn-primary"}`}
                >
                {cartItem ? "Added to Cart ✅" : "Add to Cart"}
                </button>


            {/* QUANTITY CONTROLS */}
            {cartItem && (
              <div className="d-flex align-items-center gap-3">
                <button
                  className="btn btn-outline-dark btn-sm"
                  onClick={decreaseQty}
                >
                  -
                </button>

                <span className="fw-bold fs-5">
                  {cartItem.quantity}
                </span>

                <button
                  className="btn btn-outline-dark btn-sm"
                  onClick={increaseQty}
                >
                  +
                </button>
              </div>
            )}

            <button
              className="btn btn-warning"
              onClick={() => navigate("/products")}
            >
              Back To Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
