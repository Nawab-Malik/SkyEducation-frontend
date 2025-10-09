import React, { useState } from "react";
import userImg from "../Assests/client1.jpg";
import client2Img from "../Assests/client2.jpg";
import client3Img from "../Assests/client3.jpg";
import client4Img from "../Assests/client4.jpg";
import leftArrow from "../Assests/backwardicon.png";
import rightArrow from "../Assests/forwardicon.png";
import invertedcommas from "../Assests/invertedcommas.png";
import endinvertedcommas from "../Assests/endinginvertedcommas.png";

import "./testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Maya Santos",
    role: "Student",
    text: "The courses where engaging and well-strctured. Making Learning Enjoyable!",
    img: userImg,
  },
  {
    id: 2,
    name: "Jake Paulin",
    role: "Student",
    text: "I loved the supportive instrctuors and practical approach to learning.",
    img: client2Img,
  },
  {
    id: 3,
    name: "Nick Adalman",
    role: "Student",
    text: "A fantastic learning experience! The flexible schedule allowed me to balance my studies with work.",
    img: client3Img,
  },
  {
    id: 4,
    name: "Phoebe Smith",
    role: "Student",
    text: "The Platform give me the flexibility to learn at my own pace.",
    img: client4Img,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#D9F3FD",
        minheight: "80vh",
        minWidth: "100%",
      }}
      id="blog"
    >
      <div className="container text-center mb-5 ">
        <p
          className="text-uppercase fw-semibold mb-1"
          style={{
            color: "#02AEF1",
            letterSpacing: "0.1rem ",
            fontSize: "0.75rem",
          }}
        >
          Testimonials
        </p>
        <h2 className="fw-bolder playfair-display-custom">
          What our Customers says...
        </h2>
      </div>

      {/* Testimonial Card */}
      <div className="container">
        <div
          className="testimonial-card d-flex flex-column flex-md-row align-items-center justify-content-center gap-5 p-4 rounded-4"
          style={{ backgroundColor: "#02AEF1" }}
        >
          {/* Left Design + Image */}
          <div className="position-relative d-flex  mb-4 mb-md-0">
            {/* White Line Design */}
            <div className="design-line"></div>
            <div className="design-line second"></div>

            {/* Circle Image */}
            <img
              src={testimonials[current].img}
              alt={testimonials[current].name}
              className="rounded-circle border border-3 border-white testimonial-img"
            />
          </div>

          {/* Text */}
          <div
            className="text-white ps-md-4 p-5 text-center text-md-start position-relative"
            style={{ maxWidth: "500px" }}
          >
            <img
              src={invertedcommas}
              alt="quote open"
              className="quote-icon my-2 position-absolute top-0 start-0"
            />
            <h6 className="fw-normal mb-1">{testimonials[current].name}</h6>
            <small className="d-block mb-2">{testimonials[current].role}</small>
            <h5 className="fs-3 mb-2 playfair-display-custom">
              {testimonials[current].title}
            </h5>
            <p className="fw-lighter ts-6">{testimonials[current].text}</p>
            <img
              src={endinvertedcommas}
              alt="quote close"
              className="quote-icon float-end"
            />
          </div>
        </div>

        {/* Arrows */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button className="arrow-btn" onClick={prevSlide}>
            <img src={leftArrow} alt="prev" />
          </button>
          <button className="arrow-btn active" onClick={nextSlide}>
            <img src={rightArrow} alt="next" className="invert-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
