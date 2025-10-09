import React from "react";
import { Container, Button } from "react-bootstrap";
import ctaImg from "../Assests/contactimg.png";

function ReadySection() {
  return (
    <section className="py-5 px-3">
      <Container
        className="rounded-4 text-center text-white d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundColor: "rgba(2, 174, 241, 1)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          
          overflow: "hidden",
          minHeight: "280px",
        }}
      >
        {/* Blue Overlay */}
        <div
          style={{
            backgroundColor: "rgba(2, 174, 241, 0.85)",
            position: "absolute",
            inset: 0,
          }}
        ></div>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 className="montserrat-regular mb-3">Ready to Get Started?</h2>
          <p className="mb-4 fw-lighter" style={{ maxWidth: "600px", margin: "0 auto" }}>
            The purpose of a FAQ is generally to provide information on
            frequent questions or concerns.
          </p>
          <Button
            variant="light"
            className="rounded-pill px-4 py-2 "
          >
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default ReadySection;
