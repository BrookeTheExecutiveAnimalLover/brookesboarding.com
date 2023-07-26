import React from "react";

console.log("hitting the contact page");

export default function contact() {
  return (
    <>
      <div>
        <h1 className="title is-1">Contact Us</h1>
        <p>
          <i
            className="fa-regular fa-envelope"
            style={{ color: "#ea82b7", fontSize: "45px" }}
          ></i>
          Email
          <br></br>brooke@brookesboarding.com
        </p>
        <p>
          <i
            className="fa-solid fa-mobile-screen-button"
            style={{ color: "#eb83b7", fontSize: "45px" }}
          />
          Text
          <br></br>(805) 315-3331
        </p>
      </div>
    </>
  );
}
