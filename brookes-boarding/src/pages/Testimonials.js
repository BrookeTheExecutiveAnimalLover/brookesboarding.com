import React from "react";
import classes from "./Testimonials.css";
import PortfolioCard from "../Components/ProjectCards";

console.log("hitting the testimonials page");

export default function testimonials() {
  return (
    <>
      <div className="testimonials-title"> What Our Clients Say</div>

      <div className="testimonial-box">
        <PortfolioCard />
      </div>
    </>
  );
}
