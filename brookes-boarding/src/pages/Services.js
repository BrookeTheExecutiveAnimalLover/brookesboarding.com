import React from "react";
import classes from "./Services.css";

console.log("hitting the services page");

export default function services() {
  return (
    <>
      <div className="service-box">
        <div className="surround-services-box">
          <div className="services">
            <h1 className="title is-1 service1">Boarding</h1>
            <p>
              <div className="boarding-box">
                Your pets stay overnight in your sitter’s home. They’ll be
                treated like part of the family in a comfortable environment.
              </div>
            </p>
          </div>
        </div>
        <div className="surround-services-box">
          <div className="services">
            <h1 className="title is-1 service1">Daycare</h1>
            <p>
              <div className="daycare-box">
                Your dog spends the day at your sitter’s home. Drop them off in
                the morning and pick up a happy pup in the evening.
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
