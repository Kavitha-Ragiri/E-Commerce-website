import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-5 mt-5">
      <div className="container">

        <div className="row">

          {/* Brand */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold">ShopEase</h4>
            <p>Your trusted online shopping partner. Quality products at the best price.</p>
          </div>

          {/* Categories */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Categories</h5>
            <ul className="list-unstyled">
              <li><Link to="/category/beauty" className="footer-link">Beauty</Link></li>
              <li><Link to="/category/groceries" className="footer-link">Groceries</Link></li>
              <li><Link to="/category/fragrances" className="footer-link">Fragrances</Link></li>
              <li><Link to="/category/furniture" className="footer-link">Furniture</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Support</h5>
            <ul className="list-unstyled">
              <li><Link to="/help" className="footer-link">Help & Support</Link></li>
              <li><Link to="/faq" className="footer-link">FAQ</Link></li>
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p>Email: support@shopease.com</p>
            <p>Phone: +91 98765 43210</p>

            <div className="d-flex gap-3 mt-2">
              <i className="bi bi-facebook fs-4"></i>
              <i className="bi bi-instagram fs-4"></i>
              <i className="bi bi-twitter fs-4"></i>
            </div>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center pb-3">
          © {new Date().getFullYear()} ShopEase. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
