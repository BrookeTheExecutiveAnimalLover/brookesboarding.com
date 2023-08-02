import React from "react";
import classes from "./Services.css";

console.log("hitting the services page");

export default function services() {
  return (
    <>
      <div className="services-title"> Current Services</div>
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
                Going on vacay without your furry child? <br></br>
                <br></br>
                Your pet lives with us overnight in our home and is treated like
                part of our family!<br></br>
                <div className="seperate"></div>
                <p>
                  <b>Dogs:</b>
                  <br></br>Standard: $65 per night
                  <br></br>Additional Dog: +$50 per dog per night
                  <br></br>
                  <b>Cats:</b>
                  <br></br>Standard: $40 per night
                  <br></br>Additional Cat: +$30 per cat per night
                </p>
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
                Have to spend the day running errands?<br></br>
                <br></br>
                You drop off and pick up your pet within the same day...it's
                like a long hangout!<br></br>
              </div>
              <div className="seperate"></div>
              <p>
                <b>Dogs:</b>
                <br></br>Standard: $45 per day
                <br></br>Additional Dog: +$35 per day per dog
                <br></br>
                <b>Cats:</b>
                <br></br>Standard: $20 per day
                <br></br>Additional Cat: +$10 per day per cat
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
