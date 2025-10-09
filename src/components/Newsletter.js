import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import aboutimg00 from "../Assests/newsletter.jpg";
import mailcon from "../Assests/mailicon.png";

function Newsletter() {
  return (
    <section
      className="py-5"
      style={{ width: "100%", backgroundColor: "white", }}
    >
      <Container
        className="p-lg-5 p-2 m-auto overflow-hidden rounded-4"
        style={{ width: "80%", backgroundColor: "#EBF3F538" }}
      >
        <Row className="flex align-items-center">
          {/* Left Image */}
          <Col md={6} className="p-0 text-center mb-4 mb-md-0">
            <img
              src={aboutimg00}
              alt="Newsletter"
              className="object-fit-cover rounded-4 img-fluid"
              style={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: "260px",
              }}
            />
          </Col>

          {/* Right Content */}
          <Col
            md={6}
            className="p-lg-4 p-2 text-md-start text-center"
          >
            <h2
              className="fw-bolder mb-3"
              style={{ fontFamily: "playfair-display-custom" }}
            >
              Subscribe to newsletter
            </h2>
            <p
              className="text-muted mb-4"
              style={{ fontSize: "0.75rem" }}
            >
              Sign up for our newsletter to stay up-to-date on the latest promotions,
              discounts, and new features releases.
            </p>

            {/* Input with Mail Icon + Button */}
            <InputGroup className="rounded-pill border overflow-hidden p-2 mx-auto mx-md-0" style={{ maxWidth: "400px" }}>
              <InputGroup.Text className="bg-white border-0">
                <img src={mailcon} alt="mail icon" width="18" height="18" />
              </InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Enter your mail"
                className="border-0 shadow-none fw-bold"
                style={{ fontSize: "0.75rem" }}
              />
              <Button
                variant="primary"
                className="px-4 rounded-pill subscribe-btn"
                style={{ backgroundColor: "#0d99ff", border: "none" }}
              >
                Subscribe
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>

      {/* Responsive custom styles */}
      <style jsx>{`
        @media (max-width: 992px) {
          .container {
            width: 98% !important;
          }
        }

      `}</style>
    </section>
  );
}

export default Newsletter;
