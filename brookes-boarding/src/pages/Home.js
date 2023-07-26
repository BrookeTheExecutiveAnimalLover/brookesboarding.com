import React from "react";
import Hero from "../Components/Hero/Hero";
import Content from "../Components/Content/Content";
import PicCarousel from "../Components/PicCarousel/PicCarousel";

console.log("hitting the home page");

export default function home() {
  return (
    <>
      <div>
        <Hero></Hero>
        <Content></Content>
        <PicCarousel></PicCarousel>
      </div>
    </>
  );
}
