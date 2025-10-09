import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import logo from "../Assests/logo00.png";
import Footer from "../components/Footer";
import "./contact.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mwprejkv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Thank you! Your message has been sent.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: "80px" }}>
      <Container fluid className="py-5">
        <Container>
          {/* Header Section */}
          <div className="text-center mb-5">
            <img
              src={logo}
              alt="Sky Education"
              className="mb-4"
              style={{ width: "150px", height: "120px" }}
            />
            <h1 className="fw-bold mb-3 playfair-display-custom">
              Contact Sky Education
            </h1>
            <p className="text-muted lead mb-4">
              At Sky Education, we are dedicated to fostering learning and
              development across a broad spectrum of disciplines, from health
              and beauty to public services and education.
            </p>
          </div>

          <Row className="justify-content-center">
            {/* Contact Information */}
            <Col lg={5} md={6} className="mb-4">
              <Card className="shadow-sm h-100 border-0">
                <Card.Body className="p-4">
                  <h3 className="fw-bold mb-4 text-primary">Get In Touch</h3>

                  {/* Phone */}
                  <div className="d-flex align-items-center mb-4">
                    <div className="contact-icon me-3">
                      <i className="fas fa-phone text-primary"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Phone</h6>
                      <p className="mb-0 text-muted">0161 526 5555</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="d-flex align-items-center mb-4">
                    <div className="contact-icon me-3">
                      <i className="fab fa-whatsapp text-success"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">WhatsApp</h6>
                      <p className="mb-0 text-muted">07507 500507</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="d-flex align-items-center mb-4">
                    <div className="contact-icon me-3">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Email</h6>
                      <a
                        href="mailto:Info@skyeducationltd.com"
                        className="text-decoration-none"
                        style={{ color: "#02AEF1" }}
                      >
                        Info@skyeducationltd.com
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="d-flex align-items-center mb-4">
                    <div className="contact-icon me-3">
                      <i className="fas fa-clock text-primary"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Business Hours</h6>
                      <p className="mb-1 text-muted">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="mb-0 text-muted">
                        Saturday: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="d-flex align-items-center">
                    <div className="contact-icon me-3">
                      <i className="fas fa-map-marker-alt text-primary"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Location</h6>
                      <p className="mb-0 text-muted">
                        281 Barlow Moor Road Chorlton Manchester M21 7GH
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Form */}
            <Col lg={6} md={6} className="mb-4">
              <Card className="shadow-sm h-100 border-0">
                <Card.Body className="p-4">
                  <h3 className="fw-bold mb-4 text-primary">
                    Send Us a Message
                  </h3>

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-semibold">
                            Full Name *
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                            className="border-0 border-bottom border-2 rounded-0 shadow-none"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-semibold">
                            Email Address *
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required
                            className="border-0 border-bottom border-2 rounded-0 shadow-none"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-semibold">
                            Phone Number
                          </Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            className="border-0 border-bottom border-2 rounded-0 shadow-none"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-semibold">
                            Subject *
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="What's this about?"
                            required
                            className="border-0 border-bottom border-2 rounded-0 shadow-none"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-semibold">Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help you..."
                        required
                        className="border-2 rounded-2 shadow-none"
                        style={{ borderColor: "#02AEF1", resize: "vertical" }}
                      />
                    </Form.Group>

                    <div className="d-grid">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={loading}
                        className="fw-semibold"
                        style={{
                          backgroundColor: "#02AEF1",
                          border: "none",
                          borderRadius: "25px",
                        }}
                      >
                        {loading ? "Sending..." : "Send Message"}
                        <i className="fas fa-paper-plane ms-2"></i>
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Additional Information Section */}
          <Row className="mt-5">
            <Col lg={12}>
              <Card
                className="shadow-sm border-0"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <Card.Body className="p-4 text-center">
                  <h4 className="fw-bold mb-3 text-primary">
                    Why Choose Sky Education?
                  </h4>
                  <Row>
                    <Col md={4} className="mb-3">
                      <div className="feature-item">
                        <i className="fas fa-graduation-cap fa-2x text-primary mb-3"></i>
                        <h6 className="fw-bold">Expert Training</h6>
                        <p className="text-muted small">
                          Industry-recognized qualifications across multiple
                          disciplines
                        </p>
                      </div>
                    </Col>
                    <Col md={4} className="mb-3">
                      <div className="feature-item">
                        <i className="fas fa-users fa-2x text-primary mb-3"></i>
                        <h6 className="fw-bold">Dedicated Support</h6>
                        <p className="text-muted small">
                          Personal guidance throughout your learning journey
                        </p>
                      </div>
                    </Col>
                    <Col md={4} className="mb-3">
                      <div className="feature-item">
                        <i className="fas fa-star fa-2x text-primary mb-3"></i>
                        <h6 className="fw-bold">Excellence</h6>
                        <p className="text-muted small">
                          Committed to delivering the highest quality education
                        </p>
                      </div>
                    </Col>
                  </Row>
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

export default ContactPage;
