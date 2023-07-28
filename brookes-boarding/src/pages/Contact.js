import React from "react";
import classes from "./Contact.css";

console.log("hitting the contact page");

export default function contact() {
  return (
    <>
      <div className="contact-box">
        <div className="surround-box">
          <div className="contact-us">
            <h1 className="title is-1 get-in-touch">Get In Touch</h1>
            <p>
              <div className="email-box">
                <i
                  className="fa-regular fa-envelope"
                  style={{ color: "#ea82b7", fontSize: "45px" }}
                ></i>
                <br></br>
                <b>BY EMAIL</b>
                <br></br>brooke@brookesboarding.com
              </div>
            </p>
            <p>
              <div className="text-box">
                <i
                  className="fa-solid fa-mobile-screen-button"
                  style={{ color: "#eb83b7", fontSize: "45px" }}
                />
                <br></br>
                <b>BY TEXT</b>
                <br></br>(805) 315-3331
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
