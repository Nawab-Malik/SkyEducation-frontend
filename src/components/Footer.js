import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../Assests/logo01.png";
import facebookIcon from "../Assests/facebook-icon.png";
import twitterIcon from "../Assests/twitter-icon.png";
import instagramIcon from "../Assests/instagram-icon.png";
import youtubeIcon from "../Assests/youtube-icon.png";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="flex-lg-nowrap gap-4">
          <Col lg={3} md={6}>
            <img
              src={logo}
              alt="Sky Education"
              className="mb-3"
              style={{ width: "100px", height: "80px" }}
            />
            <p
              style={{
                fontSize: "12px",
                color: "rgba(85, 85, 85, 1)",
                opacity: "0.8",
              }}
            >
              At Sky Education, we are dedicated to fostering learning and
              development across a broad spectrum of disciplines, from health
              and beauty to public services and education.
            </p>
            <p
              className=" mb-1"
              style={{
                fontSize: "12px",
                color: "rgba(85, 85, 85, 1)",
                opacity: "0.9",
              }}
            >
              <strong className="text-dark">Phone: </strong>0161 526 5555
            </p>
            <p
              className=" mb-1"
              style={{
                fontSize: "12px",
                color: "rgba(85, 85, 85, 1)",
                opacity: "0.9",
              }}
            >
              <strong className="text-dark">WhatsApp: </strong>07507 500507
            </p>
            <p
              className=" mb-3"
              style={{
                fontSize: "12px",
                color: "rgba(85, 85, 85, 1)",
                opacity: "0.9",
              }}
            >
              <strong className="text-dark text-decoration-none">
                Email:{" "}
              </strong>
              <span className="text-decoration-underline">
                Info@skyeducationltd.com
              </span>
            </p>

            <div className="d-flex gap-2">
              <a href="https://twitter.com" className="social-circle">
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="https://facebook.com" className="social-circle">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="https://instagram.com" className="social-circle">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://youtube.com" className="social-circle">
                <img src={youtubeIcon} alt="YouTube" />
              </a>
            </div>
          </Col>

          {/* Column 2 - Quick Links */}
          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-3 playfair-display-custom">
              Quick Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="footer-link">
                  Courses
                </Link>
              </li>
              <li>
                <a href="#blog" className="footer-link">
                  Blog
                </a>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>

          {/* Column 3 - Help */}
          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-3 playfair-display-custom">Help</h5>
            <ul className="list-unstyled ">
              <li>
                <a href="#support" className="footer-link">
                  Customer Support
                </a>
              </li>
              <li>
                <Link to="/terms" className="footer-link">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="footer-link">
                  FAQ
                </Link>
              </li>
            </ul>
          </Col>

          {/* Column 4 - Newsletter */}
          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-3 playfair-display-custom">
              Subscribe to Newsletter
            </h5>
            <InputGroup className="mb-3 ">
              <Form.Control
                type="email"
                placeholder="Enter email address"
                className="rounded-end rounded-pill fw-lighter"
                style={{ fontSize: "12px", color: "rgba(85, 85, 85, 1)" }}
              />
              <Button
                className=" px-4 join-btn rounded-start rounded-pill shadow"
                style={{ fontSize: "12px" }}
              >
                Join
              </Button>
            </InputGroup>
          </Col>
        </Row>

        {/* Divider + Bottom Text */}
        <hr className="footer-divider" />
        <p
          className="text-center small mb-0"
          style={{
            fontSize: "12px",
            color: "rgba(85, 85, 85, 1)",
            letterSpacing: "0.8px",
          }}
        >
          Copyright 2025 © – Sky Education Ltd
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
