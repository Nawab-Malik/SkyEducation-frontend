import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./about.css";

const About = () => {
  const navigate = useNavigate();

  const handleExplorePrograms = () => {
    navigate("/courses");
  };

  return (
    <section
      className="py-5 position-relative"
      style={{
        backgroundColor: "#02AEF126",
        minHeight: "auto",
        visibility: "visible",
        opacity: "1"
      }}
      id="about"
    >
      {/* Floating background elements */}
      <div className="floating-element position-absolute" style={{ top: '10%', right: '5%', fontSize: '2rem', opacity: '0.1' }}>
        📚
      </div>
      <div className="floating-element position-absolute" style={{ top: '60%', left: '3%', fontSize: '1.5rem', opacity: '0.1' }}>
        🎓
      </div>
      <div className="floating-element position-absolute" style={{ top: '30%', right: '15%', fontSize: '1.8rem', opacity: '0.1' }}>
        🚀
      </div>

      <Container>
        {/* Section Heading */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={10}>
            <h2
              className="fw-bold mb-3 title-fade-in"
              style={{
                color: "rgba(2, 174, 241, 1)",
                fontSize: "2.5rem",
                fontFamily: "'Playfair Display', serif",
                textAlign: "center",
                lineHeight: "1.2"
              }}
            >
              Shaping Careers Through
              <br />
              <span style={{ color: "#02AEF1", position: "relative" }}>
                Quality Education
                <span style={{
                  content: '""',
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "0",
                  height: "3px",
                  background: "linear-gradient(90deg, #02AEF1, #0EA5E9)",
                  transition: "width 0.6s ease"
                }} className="title-underline"></span>
              </span>
            </h2>
            <p
              className="text-muted lead mb-0 subtitle-fade-in"
              style={{ fontSize: "1.1rem", color: "#6c757d" }}
            >
              Empowering students with practical skills for successful careers.
            </p>
          </Col>
        </Row>

        {/* Main Content */}
        <Row className="justify-content-center">
          <Col lg={12} xl={12}>
            <Row className="g-4">
              {/* Mission Statement */}
              <Col md={12} className="text-center mb-4">
                <p className="fs-5 text-dark mb-4 lh-base">
                  At Sky Education, we are dedicated to fostering learning and
                  development across a broad spectrum of disciplines, from ESOL
                  certificates to automotive, education, and public services.
                  Established in the UK, our institution is committed to providing
                  high-quality, accessible education that equips our students with
                  the skills and knowledge necessary to excel in their chosen fields.
                </p>
              </Col>

              {/* Key Features */}
              <Col md={4}>
                <div className="h-100 p-4 bg-white rounded-3 shadow-sm about-card">
                  <div className="card-particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                  </div>
                  <div className="sparkles">
                    <div className="sparkle"></div>
                    <div className="sparkle"></div>
                    <div className="sparkle"></div>
                  </div>
                  <div className="card-content">
                    <h4 className="fw-semibold mb-3" style={{ color: "#02AEF1" }}>
                      Expert-Designed Curriculum
                    </h4>
                    <p className="mb-0 text-muted">
                      Our comprehensive curriculum is designed by industry experts to
                      ensure relevance in today's competitive job market. We offer
                      hands-on training, modern facilities, and personalized support
                      to help each student achieve their full potential.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={4}>
                <div className="h-100 p-4 bg-white rounded-3 shadow-sm about-card">
                  <div className="card-particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                  </div>
                  <div className="sparkles">
                    <div className="sparkle"></div>
                    <div className="sparkle"></div>
                    <div className="sparkle"></div>
                  </div>
                  <div className="card-content">
                    <h4 className="fw-semibold mb-3" style={{ color: "#02AEF1" }}>
                      Transformative Education
                    </h4>
                    <p className="mb-0 text-muted">
                      Whether you're pursuing ESOL certification, automotive skills,
                      or public service careers, our programs provide the foundation
                      you need for long-term professional success. We believe in
                      education that transforms lives and communities.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={4}>
                <a
                  href="https://skyaestheticstraining.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  style={{ display: 'block', height: '100%' }}
                >
                  <div className="h-100 p-4 bg-white rounded-3 shadow-sm about-card">
                    <div className="card-particles">
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                    </div>
                    <div className="sparkles">
                      <div className="sparkle"></div>
                      <div className="sparkle"></div>
                      <div className="sparkle"></div>
                    </div>
                    <div className="card-content">
                      <h4 className="fw-semibold mb-3" style={{ color: "#02AEF1" }}>
                        Sky Aesthestic Training .
                      </h4>
                      <p className="mb-0 text-muted">
                        Learn from experienced professionals through our comprehensive, hands-on aesthetic courses designed to cover the latest techniques and innovations. With industry recognition, valuable networking opportunities, ongoing education, and proven success.
                      </p>
                      <div className="text-center mt-3">
                        <small className="text-primary" style={{ cursor: 'pointer' }}>
                          <em>Click to visit website →</em>
                        </small>
                      </div>
                    </div>
                  </div>
                </a>
              </Col>
            </Row>

            {/* Call to Action */}
            <Row className="justify-content-center mt-5">
              <Col md={6} className="text-center">
                <Button
                  size="lg"
                  className="px-5 py-3 fw-semibold pulse-element"
                  style={{
                    backgroundColor: "#02AEF1",
                    borderColor: "#02AEF1",
                    borderRadius: "8px",
                    fontSize: "1.1rem",
                    boxShadow: "0 4px 15px rgba(2, 174, 241, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 8px 25px rgba(2, 174, 241, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(2, 174, 241, 0.3)';
                  }}
                  onClick={handleExplorePrograms}
                >
                  Explore Our Programs
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;