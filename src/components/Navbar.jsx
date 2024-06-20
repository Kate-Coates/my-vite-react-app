import { Component } from "react";
import './Navbar.css';

class Navbar extends Component{
  render(){
    return (
      <div className="Navbar">
        <h1>Art Gallery</h1>
        <div className="NavItems">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    );
  }
}

export default Navbar
