import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar =() => {
  return (
    <div className="Navbar">
      <h1>Art Gallery</h1>
      <div className="NavItems">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar
