import { Carousel } from "bootstrap";
import React, { Component } from "react";
import "./PicCarousel.scss";

class PicCarousel extends Component {
  render() {
    return (
      <div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img
                src={require("../../Assets/bleu.jpeg")}
                height="150"
                width="150"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={require("../../Assets/bruno.jpeg")}
                height="150"
                width="150"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={require("../../Assets/cleo.jpeg")}
                height="150"
                width="150"
                alt=""
              />
            </div>
            <div clasName="slide">
              <img
                src={require("../../Assets/coco.jpeg")}
                height="150"
                width="150"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={require("../../Assets/dante.jpeg")}
                height="150"
                width="150"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={require("../../Assets/elvis.jpeg")}
                height="150"
                width="150"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={require("../../Assets/finn.jpeg")}
                height="150"
                width="150"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={require("../../Assets/hachi.jpeg")}
                height="150"
                width="150"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={require("../../Assets/hero.jpeg")}
                height="150"
                width="150"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={require("../../Assets/jimmy.jpeg")}
                height="150"
                width="150"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={require("../../Assets/koko2.jpeg")}
                height="150"
                width="150"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={require("../../Assets/millie.jpeg")}
                height="150"
                width="150"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={require("../../Assets/rudy.jpeg")}
                height="150"
                width="150"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={require("../../Assets/ryder.jpeg")}
                height="150"
                width="150"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={require("../../Assets/tucker.jpeg")}
                height="150"
                width="150"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={require("../../Assets/vinny.jpeg")}
                height="150"
                width="150"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PicCarousel;
