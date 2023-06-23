import React, { Component } from "react";
import logo2 from "../.././Assets/logo2.png";
import classes from "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="container, g-0">
        <div className="Header">
          <img src={logo2} height="90%" width="2.8%"></img>
          <div className="button-38">DEALS</div>
          <div className="button-38">BOOK</div>
          <div className="Button">Services</div>
          <div className="Button">Testimonials</div>
          <div className="Button">About Us</div>
          <div className="Button">Contact</div>
        </div>
      </div>
    );
  }
}

export default Header;
