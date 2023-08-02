import React from "react";
import classes from "./Services.css";

console.log("hitting the services page");

export default function services() {
  return (
    <>
      <div className="service-box">
        <div className="surround-services-box">
          <div className="services">
            <h1 className="title is-1 service1">
              <i
                className="fa-solid fa-suitcase"
                style={{ color: "#ea82b7", fontSize: "45px" }}
              ></i>
              <br></br>Boarding
            </h1>
            <p>
              <div className="boarding-box">
                Going on vacation without your furry child? <br></br>
                <br></br>
                Your pet lives with us overnight in our home and is treated like
                part of our family!
              </div>
            </p>
          </div>
        </div>
        <div className="surround-services-box">
          <div className="services">
            <h1 className="title is-1 service1">
              <i
                className="fa-solid fa-sun"
                style={{ color: "#ea82b7", fontSize: "45px" }}
              ></i>
              <br></br>Daycare
            </h1>
            <p>
              <div className="daycare-box">
                Got to spend the day running errands?<br></br>
                <br></br>
                You drop off and pick up your pet within the same day...it's
                like a long hangout!
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
