import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


function Cart() {
  
  let navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCart);
  }, []);

  let orderTotal = cartItems
        .reduce((sum, item) => {
        return sum + item.price * item.quantity;
                }, 0) 
        .toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });;


if (!Array.isArray(cartItems)) {
  cartItems = [];
}


  function increaseQty(id) {
    let updated = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updated);
  localStorage.setItem("cartItems", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  }

  function decreaseQty(id) {
    let updated = cartItems.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
      window.dispatchEvent(new Event("cartUpdated"));
    
  }

  function removeItem(id) {
    let updated = cartItems.filter(item => item.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(updated));
    setCartItems(updated);
     localStorage.setItem("cartItems", JSON.stringify(updated));

    window.dispatchEvent(new Event("cartUpdated"));
  }

  function proccedToPayment(){
    alert("Proceeding to payment of amount $" + orderTotal);
    navigate("/proceedtopayment");
  }

 return (
  <div className="cart-page py-5">
    <div className="container mt-5 pt-4">

      <div className="d-flex flex-row justify-content-between align-items-center mb-4">
        <h2 className="mb-4 fw-bold">Your Cart</h2>
      <div className='d-flex flex-row justify-content-start gap-5 mt-3 pt-3 align-items-center'>
          <button onClick={() => navigate("/products")} style={{border:"none", backgroundColor:"white"}}>
            <span><i class="bi bi-arrow-left"></i> Back</span></button>
        </div>
      </div>

      

      {cartItems.length === 0 ? (
        <div className="alert alert-warning text-center">
          <h5>No items in cart</h5>
        </div>
      ) : (
        cartItems.map((item) => (
          <div 
            key={item.id}
            className="card cart-card mb-3 shadow-sm"
          >
            <div className="row g-0 align-items-center">

              {/* Image */}
              <div className="col-md-2 text-center p-3">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="img-fluid rounded cart-img"
                />
              </div>

              {/* Title */}
              <div className="col-md-4 p-3">
                <h6 className="fw-bold">{item.title}</h6>
                <p className="text-muted mb-1">Price: ${item.price}</p>
                <p className="text-muted mb-0">
                  Total: <b>${(item.price * item.quantity).toFixed(2)}</b>
                </p>
              </div>

              {/* Quantity buttons */}
              <div className="col-md-3 p-3 d-flex align-items-center justify-content-center">
                <button 
                  className="btn btn-outline-dark btn-sm"
                  onClick={() => decreaseQty(item.id)}
                >
                  -
                </button>

                <span className="mx-3 fw-bold">{item.quantity}</span>

                <button 
                  className="btn btn-outline-dark btn-sm"
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>
              </div>

              {/* Remove button */}
              <div className="col-md-3 text-center p-3">
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>

            </div>
          </div>
        ))
      )}

      {/* Order Summary */}
      {cartItems.length > 0 && (
        <div className="card shadow-sm p-3 mt-4 cart-summary">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">
              Order Total: <span className="fw-bold">${orderTotal}</span>
            </h5>

            <button 
              onClick={proccedToPayment} 
              className="btn btn-primary"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      )}

    </div>
  </div>
);

}

export default Cart;
