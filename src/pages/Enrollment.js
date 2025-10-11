import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
  Badge,
} from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import Footer from "../components/Footer";
import mailIcon from "../Assests/mailicon.png";
import "./enrollment.css";

const EnrollmentPage = () => {
  const location = useLocation();
  const courseData = location.state?.course;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: courseData?.title || "",
    previousEducation: "",
    message: "",
    hearAboutUs: "",
    terms: false,
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const getAwardingBodyLogo = (courseImg) => {
    // Extract awarding body from image path
    const imgPath = courseImg || "";
    if (imgPath.includes("icq")) {
      return (
        <img
          src="/Assests/partner04.png"
          alt="ICQ"
          style={{ width: "120px", height: "120px", objectFit: "contain" }}
          className="awarding-body-img"
        />
      );
    } else if (imgPath.includes("seg")) {
      return (
        <img
          src="/Assests/partner02.png"
          alt="SEG"
          style={{ width: "120px", height: "120px", objectFit: "contain" }}
          className="awarding-body-img"
        />
      );
    } else if (imgPath.includes("persons")) {
      return (
        <img
          src="/Assests/partner05.png"
          alt="PEARSON"
          style={{ width: "120px", height: "120px", objectFit: "contain" }}
          className="awarding-body-img"
        />
      );
    } else if (imgPath.includes("proqual")) {
      return (
        <img
          src="/Assests/partner00.png"
          alt="PROQUAL"
          style={{ width: "120px", height: "120px", objectFit: "contain" }}
          className="awarding-body-img"
        />
      );
    } else if (imgPath.includes("vtct")) {
      return (
        <img
          src="/Assests/partner01.png"
          alt="VTCT"
          style={{ width: "120px", height: "120px", objectFit: "contain" }}
          className="awarding-body-img"
        />
      );
    } else if (imgPath.includes("sqa")) {
      return (
        <img
          src="/Assests/partner06.png"
          alt="SQA"
          style={{ width: "120px", height: "120px", objectFit: "contain" }}
          className="awarding-body-img"
        />
      );
    }
    return null;
  };

  const getCourseCategory = (courseImg) => {
    const imgPath = courseImg || "";

    // Check for VTCT Functional Skills courses specifically
    if (
      imgPath.includes("vtct") &&
      (imgPath.includes("vtct14") ||
        imgPath.includes("vtct15") ||
        imgPath.includes("vtct16") ||
        imgPath.includes("vtct17"))
    ) {
      return "VTCT";
    }

    if (imgPath.includes("icq")) {
      return "Education & Training";
    } else if (imgPath.includes("seg")) {
      return "Automotive & MOT";
    } else if (imgPath.includes("persons")) {
      return "English & Maths";
    } else if (imgPath.includes("proqual")) {
      return "Construction";
    } else if (imgPath.includes("vtct")) {
      return "ESOL Certificates";
    } else if (imgPath.includes("sqa")) {
      return "Taxi & Private Hire";
    }
    return "General";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.terms) {
      setAlertType("danger");
      setAlertMessage("Please accept the terms and conditions to continue.");
      setShowAlert(true);
      return;
    }

    try {
      const response = await fetch(
        "https://sky-education-backend.vercel.app/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setAlertType("success");
        setAlertMessage(
          "Thank you for your enrollment application! We'll contact you within 24 hours."
        );
        setShowAlert(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          course: courseData?.title || "",
          previousEducation: "",
          message: "",
          hearAboutUs: "",
          terms: false,
        });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setAlertType("danger");
      setAlertMessage("Failed to submit form. Please try again later.");
      setShowAlert(true);
    }
  };

  return (
    <div style={{ marginTop: "80px" }}>
      <Container fluid className="py-5 bg-light">
        <Container>
          {/* Header Section */}
          <div className="text-center mb-5">
            <h1 className="fw-bold text-primary mb-3">Course Enrollment</h1>
            <p className="lead text-muted">
              Take the next step in your professional development journey
            </p>
            {courseData && (
              <div className="mt-4 w-100">
                <Row className="g-4 justify-content-center">
                  {/* Left - Partner Logo */}
                  <Col lg={4} md={4} className="text-center">
                    <div className="p-4">
                      {getAwardingBodyLogo(courseData.img)}
                      <p className="text-muted mt-2">Awarding Body</p>
                    </div>
                  </Col>

                  {/* Middle - Course Info */}
                  <Col lg={4} md={4} className="text-center">
                    <div className="p-4">
                      <h5 className="fw-bold text-dark mb-2">
                        Selected Course
                      </h5>
                      <h4 className="text-primary mb-3 course-title">
                        {courseData.title}
                      </h4>
                      <p className="text-muted course-description">
                        {courseData.desc}
                      </p>
                    </div>
                  </Col>

                  {/* Right - Course Image */}
                  <Col lg={4} md={4} className="text-center">
                    <div className="p-4">
                      <div className="course-image-container mb-3">
                        <img
                          src={courseData.img}
                          alt={courseData.title}
                          className="img-fluid rounded w-100"
                          style={{
                            maxHeight: "200px",
                            objectFit: "cover",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                          }}
                          onError={(e) => {
                            e.target.src = "/logo00.png";
                          }}
                        />
                      </div>
                      <p className="text-muted">Course Preview</p>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
          </div>

          {showAlert && (
            <Alert
              variant={alertType}
              dismissible
              onClose={() => setShowAlert(false)}
            >
              {alertMessage}
            </Alert>
          )}

          <Row>
            {/* Contact Information */}
            <Col lg={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="p-4">
                  <h4 className="fw-bold text-primary mb-4">Get In Touch</h4>

                  <div className="contact-item mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-map-marker-alt text-primary me-3"></i>
                      <h6 className="fw-bold mb-0">Address</h6>
                    </div>
                    <p className="text-muted ms-4">
                      281 Barlow Moor Road
                      <br />
                      Chorlton Manchester
                      <br />
                      M21 7GH
                    </p>
                  </div>

                  <div className="contact-item mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-phone text-primary me-3"></i>
                      <h6 className="fw-bold mb-0">Phone</h6>
                    </div>
                    <p className="text-muted ms-4">
                      <a
                        href="tel:+4401415265555"
                        className="text-decoration-none text-muted"
                      >
                        0161 526 5555
                      </a>
                    </p>
                  </div>
                  <div className="contact-item mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-phone text-primary me-3"></i>
                      <h6 className="fw-bold mb-0">WhatsApp</h6>
                    </div>
                    <p className="text-muted ms-4">
                      <a
                        href="tel:+4401415265555"
                        className="text-decoration-none text-muted"
                      >
                        07507 500507
                      </a>
                    </p>
                  </div>

                  <div className="contact-item mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <img
                        src={mailIcon}
                        alt="email"
                        width="16"
                        className="me-3"
                      />
                      <h6 className="fw-bold mb-0">Email</h6>
                    </div>
                    <p className="text-muted ms-4">
                      <a
                        href="mailto:info@skyeducationltd.com"
                        className="text-decoration-none text-muted"
                      >
                        info@skyeducationltd.com
                      </a>
                    </p>
                  </div>

                  <div className="contact-item mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-clock text-primary me-3"></i>
                      <h6 className="fw-bold mb-0">Office Hours</h6>
                    </div>
                    <p className="text-muted ms-4">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Enrollment Form */}
            <Col lg={8}>
              <Card className="shadow-sm border-0">
                <Card.Body className="p-4">
                  <h4 className="fw-bold text-primary mb-4">
                    Enrollment Application
                  </h4>

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-medium">
                            First Name *
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your first name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-medium">
                            Last Name *
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your last name"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-medium">
                            Email Address *
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your email"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-medium">
                            Phone Number *
                          </Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your phone number"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-medium">
                        Course of Interest *
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter course name"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-medium">
                        Previous Education/Experience
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="previousEducation"
                        value={formData.previousEducation}
                        onChange={handleInputChange}
                        placeholder="Tell us about your relevant education or experience"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-medium">
                        How did you hear about us?
                      </Form.Label>
                      <Form.Select
                        name="hearAboutUs"
                        value={formData.hearAboutUs}
                        onChange={handleInputChange}
                      >
                        <option value="">Please select</option>
                        <option value="google">Google Search</option>
                        <option value="social-media">Social Media</option>
                        <option value="friend">Friend/Family</option>
                        <option value="website">Our Website</option>
                        <option value="advertisement">Advertisement</option>
                        <option value="other">Other</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-medium">
                        Additional Message
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Any questions or special requirements?"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Check
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleInputChange}
                        label={
                          <span>
                            I agree to the{" "}
                            <Link
                              to="/terms"
                              className="text-primary text-decoration-none"
                            >
                              Terms and Conditions
                            </Link>{" "}
                            and{" "}
                            <Link
                              to="/privacy"
                              className="text-primary text-decoration-none"
                            >
                              Privacy Policy
                            </Link>{" "}
                            *
                          </span>
                        }
                        required
                      />
                    </Form.Group>

                    <div className="text-center d-flex justify-content-center flex-wrap">
                      <Button
                        type="submit"
                        className="enroll-btn"
                        style={{
                          padding: "12px 32px",
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          borderRadius: "8px",
                          border: "none",
                          backgroundColor: "#6c757d",
                          transition: "all 0.3s ease",
                          minWidth: "180px",
                          margin: "10px", // Equal margin on all sides
                        }}
                      >
                        Submit Now
                      </Button>

                      {/* Booking button for taxi courses - shown alongside submit button */}
                      {courseData && [1, 2, 46].includes(courseData.id) && (
                        <Button
                          variant="primary"
                          className="fw-bold pay-now-btn"
                          style={{
                            backgroundColor: "#02AEF1",
                            border: "none",
                            padding: "12px 32px",
                            fontSize: "1.1rem",
                            fontWeight: "600",
                            borderRadius: "8px",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            boxShadow: "0 4px 15px rgba(2, 174, 241, 0.3)",
                            minWidth: "180px",
                            color: "white",
                            margin: "10px", // Equal margin on all sides
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#0EA5E9";
                            e.target.style.transform = "translateY(-2px)";
                            e.target.style.boxShadow =
                              "0 6px 20px rgba(2, 174, 241, 0.4)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "#02AEF1";
                            e.target.style.transform = "translateY(0)";
                            e.target.style.boxShadow =
                              "0 4px 15px rgba(2, 174, 241, 0.3)";
                          }}
                          onClick={() => {
                            window.open(
                              "https://buy.stripe.com/bJe4gBb8LcynaNj6gZ0Ba01",
                              "_blank"
                            );
                          }}
                        >
                          Pay Now
                        </Button>
                      )}
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default EnrollmentPage;
