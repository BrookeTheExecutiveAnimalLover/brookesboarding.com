import React, { Component } from "react";
import classes from "./Content.css";

class Content extends Component {
  render() {
    return (
      <div>
        <div className="card mb-3 border-0" style={{ maxWidth: "100%" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                id="img1"
                src={require("../../Assets/koko.jpeg")}
                className="img-fluid rounded-end"
                alt="..."
                width={550}
                height={550}
              ></img>
            </div>
            <div id="card1" className="col-md-8">
              <div className="card-body1">
                <h5 className="card-title1">Why I Do What I Do</h5>
                <p className="card-text1">
                  At Brooke's Boarding, our passion for pets drives us to
                  provide blissful stays for your furry family members. Our
                  founder, Brooke, saw her parents hesitant to travel due to the
                  fear of leaving their pets with strangers, which inspired her
                  to create a safe, comfortable, and fun environment for pets.
                  We believe in personalized care for each pet, tailored to
                  their unique needs and preferences. Our experienced team
                  treats every guest with the same level of love and attention
                  we would give to our own pets. At Brooke's Boarding, we're
                  committed to providing peace of mind for pet owners while
                  they're away, knowing their pets are enjoying a blissful stay.
                </p>
                <p className="card-text">
                  <button id="button1" type="button" className="btn btn-dark">
                    More about us
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 border-0" style={{ maxWidth: "100%" }}>
          <div className="row g-0">
            <div id="card2" className="col-md-8">
              <div className="card-body2">
                <h5 className="card-title2">Read Testimonials</h5>
                <p className="card-text2">
                  I understand that trusting someone with your furry family
                  member is not an easy decision. That's why at Brooke's
                  Boarding, we encourage potential customers to read our
                  testimonials from satisfied pet owners who have trusted us
                  with their pets. Our testimonials reflect our commitment to
                  providing exceptional pet care and creating a warm and
                  welcoming environment for pets. We take pride in the
                  relationships we've built with our customers and their furry
                  family members, and our testimonials are a testament to the
                  quality of care we provide. So take a look at our testimonials
                  and see what our customers have to say about their experience
                  with us. I believe you'll find that Brooke's Boarding is the
                  perfect place for your pet's stay.
                </p>
                <p className="card-text2">
                  <button id="button2" type="button" class="btn btn-light">
                    More testimonials
                  </button>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                id="img2"
                src={require("../../Assets/zoey.jpeg")}
                className="img-fluid rounded-end"
                alt="..."
                width={550}
                height={550}
              ></img>
            </div>
          </div>
        </div>
        <div className="card mb-3 border-0" style={{ maxWidth: "100%" }}>
          <div className="row g-0">
            <div id="card3" className="col-md-12, col3">
              <div className="card-body3">
                <h5 className="card-title3">Rates</h5>
                <p className="card-text3">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text3">
                  <button id="button3" type="button" className="btn btn-dark">
                    More
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
