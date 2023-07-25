import React, { Component } from "react";

export default function hero() {
  return (
    <>
      <div>
        <div className="hero-full-screen">
          <div className="top-content-section"></div>

          <div className="middle-content-section"></div>

          <div
            className="bottom-content-section"
            data-magellan
            data-threshold="0"
          >
            <a href="#main-content-section">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z" />
              </svg>
            </a>
          </div>
        </div>

        <div
          id="main-content-section"
          data-magellan-target="main-content-section"
        ></div>
      </div>
    </>
  );
}
