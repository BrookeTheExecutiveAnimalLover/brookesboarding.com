import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "./Components/Header/Header.css";
import Header from "./Components/Header/Header";
import About from "./pages/About";
import Deals from "./pages/Deals";
import Book from "./pages/Book";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import ParamChild from "./pages/paramChild";

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={App} />
        <Route path="/:id" element={<ParamChild />} />
        {/* <Route path="/about" element={About()} />
        <Route path="/book" element={Book()} />
        <Route path="/contact" element={Contact()} />
        <Route path="/deals" element={Deals()} />
        <Route path="/services" element={Services()} />
        <Route path="/testimonials" element={Testimonials()} /> */}
      </Routes>
    </Router>
  );
};

const rootElement = document.getElementById("root");

// Use createRoot instead of ReactDOM.render
const renderMethod = rootElement.hasChildNodes()
  ? ReactDOM.hydrate
  : ReactDOM.render;

renderMethod(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  rootElement
);
