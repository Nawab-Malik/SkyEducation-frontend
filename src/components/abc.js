import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card, Spinner } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./aboutus.css";
import "../components/about.css";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({ 
      duration: 1000, 
      once: true, 
      offset: 100 
    });

    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Particles configuration
  const particlesConfig = {
    fullScreen: { enable: true },
    particles: {
      number: { 
        value: 80, 
        density: { enable: true, area: 800 } 
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3, random: true },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: { 
        enable: true, 
        speed: 6, 
        outModes: { default: "out" } 
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
    },
    detectRetina: true,
  };

  // Mission, Vision, Values data
  const aboutCards = [
    {
      icon: "fas fa-bullseye",
      title: "Our Mission",
      description: "To foster lifelong learning by providing accessible and innovative education opportunities that transform lives.",
      animation: "fade-right"
    },
    {
      icon: "fas fa-eye",
      title: "Our Vision", 
      description: "To be a leader in education, empowering learners to achieve their dreams and shape a better future.",
      animation: "fade-up"
    },
    {
      icon: "fas fa-star",
      title: "Why Choose Us?",
      description: "Expert trainers, flexible courses, and a supportive learning environment to ensure your success.",
      animation: "fade-left"
    }
  ];

  if (loading) {
    return (
      <div className="d-flex vh-100 align-items-center justify-content-center bg-light">
        <div className="text-center">
          <Spinner animation="border" variant="primary" className="mb-3" />
          <h3 className="text-primary">Loading Sky Education...</h3>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section with Particles */}
      <section
        className="position-relative text-white min-vh-100 d-flex align-items-center justify-content-center"
        style={{
          background: "linear-gradient(135deg, #02AEF1 0%, #0EA5E9 100%)",
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
        />

        <Container className="position-relative" style={{ zIndex: 10 }}>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <h1 className="display-1 fw-bold mb-4" data-aos="fade-down">
                About Us
              </h1>
              <p className="lead mb-5" data-aos="fade-up" data-aos-delay="200">
                At <strong>Sky Education</strong>, we empower individuals through
                high-quality training in ESOL certificates, automotive, education,
                and public services.
              </p>

              {/* Mission, Vision, Values Cards */}
              <Row className="g-4 mb-5">
                {aboutCards.map((card, index) => (
                  <Col md={4} key={index}>
                    <Card 
                      className="h-100 shadow-lg border-0 about-card"
                      data-aos={card.animation}
                      data-aos-delay={index * 100}
                    >
                      <Card.Body className="text-center p-4">
                        <div 
                          className="icon-circle bg-primary text-white d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
                          style={{ width: "80px", height: "80px" }}
                        >
                          <i className={`${card.icon} fa-2x`}></i>
                        </div>
                        <Card.Title className="h5 fw-bold mb-3 text-dark">
                          {card.title}
                        </Card.Title>
                        <Card.Text className="text-muted">
                          {card.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              <Button
                variant="light"
                size="lg"
                className="px-5 py-3 fw-semibold"
                onClick={() => scrollToSection("about-details")}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Learn More About Us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Detailed About Section */}
      <section
        className="py-5"
        style={{ backgroundColor: "#02AEF126" }}
        id="about-details"
      >
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={10}>
              <h2
                className="fw-bold playfair-display-custom mb-3"
                style={{ color: "rgba(2, 174, 241, 1)" }}
                data-aos="fade-down"
              >
                Exceptional Training Across
                <br />
                Multiple Disciplines
              </h2>
              <p className="text-muted lead mb-0" data-aos="fade-up">
                Empowering students with practical skills for successful careers.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <Row className="g-4">
                <Col md={12} className="text-center mb-4">
                  <div data-aos="fade-up">
                    <p className="fs-5 text-dark mb-4 lh-base">
                      At Sky Education, we are dedicated to fostering learning and
                      development across a broad spectrum of disciplines, from ESOL
                      certificates to automotive, education, and public services.
                      Established in the UK, our institution is committed to providing
                      high-quality, accessible education that equips our students with
                      the skills and knowledge necessary to excel in their chosen fields.
                    </p>
                  </div>
                </Col>

                <Col md={6}>
                  <Card 
                    className="h-100 border-0 shadow-sm"
                    data-aos="fade-right"
                  >
                    <Card.Body className="p-4">
                      <h4 className="fw-semibold mb-3" style={{ color: "#02AEF1" }}>
                        Industry-Expert Curriculum
                      </h4>
                      <p className="text-muted mb-0">
                        Our comprehensive curriculum is designed by industry experts to
                        ensure relevance in today's competitive job market. We offer
                        hands-on training, modern facilities, and personalized support
                        to help each student achieve their full potential.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={6}>
                  <Card 
                    className="h-100 border-0 shadow-sm"
                    data-aos="fade-left"
                  >
                    <Card.Body className="p-4">
                      <h4 className="fw-semibold mb-3" style={{ color: "#02AEF1" }}>
                        Transformative Education
                      </h4>
                      <p className="text-muted mb-0">
                        Whether you're pursuing ESOL certification, automotive skills,
                        or public service careers, our programs provide the foundation
                        you need for long-term professional success. We believe in
                        education that transforms lives and communities.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <Row className="justify-content-center mt-5">
                <Col md={6} className="text-center">
                  <Button
                    size="lg"
                    className="px-5 py-3 fw-semibold"
                    style={{
                      backgroundColor: "#02AEF1",
                      borderColor: "#02AEF1",
                      borderRadius: "8px",
                      fontSize: "1.1rem",
                      boxShadow: "0 4px 15px rgba(2, 174, 241, 0.3)",
                    }}
                    data-aos="fade-up"
                  >
                    Explore Our Programs
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
