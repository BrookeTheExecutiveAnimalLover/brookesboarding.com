import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo2 from "../.././Assets/logo2.png";
import classes from "./Header.css";

export default function header() {
  return (
    <>
      <div className="container, g-0">
        <div className="Header">
          <img src={logo2} height="90%" width="2.8%"></img>
          <div className="button-38">
            <Link to="/deals">DEALS</Link>
          </div>
          <div className="button-38">
            <Link to="/book">BOOK</Link>
          </div>
          <div className="Button">
            <Link to="/services">Services</Link>
          </div>
          <div className="Button">
            <Link to="/testimonials">Testimonials</Link>
          </div>
          <div className="Button">
            <Link to="/about">About</Link>
          </div>
          <div className="Button">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
}
