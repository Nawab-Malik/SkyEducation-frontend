import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assests/logo00.png";
import courseData from "./CourseData";
import { generateSlug } from "../utils/courseUtils";
import "./home.css";

function NavigationBar() {
  const [showCourses, setShowCourses] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  // Get the actual SQA and ICQ courses to ensure consistent navigation
  const sqaCourses = courseData.SQA || [];
  const icqCourses = courseData.ICQ || [];
  const taxiCourses = courseData.TAXI || [];
  const course1 = sqaCourses.find((course) => course.id === 1); // Level 2 SQA
  const course2 = sqaCourses.find((course) => course.id === 2); // Level 5 SQA
  const course3 = taxiCourses.find((course) => course.id === 46); // BTEC Level 2 ICQ

  // Function to close mobile menu when navigation item is clicked
  const handleNavClick = () => {
    setExpanded(false);
    setShowCourses(false);
  };

  // Detect mobile view
  const isMobile = window.innerWidth < 992;

  // Dropdown event handlers
  const handleDropdownMouseEnter = () => {
    if (!isMobile) setShowCourses(true);
  };
  const handleDropdownMouseLeave = () => {
    if (!isMobile) setShowCourses(false);
  };
  const handleDropdownClick = () => {
    if (isMobile) setShowCourses((prev) => !prev);
  };

  // Add enroll handler
  const handleEnroll = () => {
    navigate("/enroll");
  };

  return (
    <Navbar
      expand="lg"
      bg="white"
      fixed="top"
      className="shadow-sm py-2 px-lg-5"
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container fluid className="px-4">
        {/* Logo goes to Home */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="logo"
          onClick={handleNavClick}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ height: "55px", width: "auto" }}
          />
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle
          aria-controls="navbar-nav"
          style={{ border: "none", boxShadow: "none" }}
        />

        {/* Menu Items */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="align-items-lg-center fw-semibold custom-nav gap-2">
            <Nav.Link as={Link} to="/" onClick={handleNavClick}>
              Home
            </Nav.Link>
            {/* Courses Dropdown */}
            <NavDropdown
              id="courses-dropdown"
              title={<span className="fw-bold">Courses</span>}
              show={showCourses}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
              onClick={handleDropdownClick}
              className="courses-mega-dropdown"
            >
              <div
                className="mega-dropdown-content p-2"
                style={
                  isMobile
                    ? {
                        maxHeight: "60vh",
                        overflowY: "auto",
                        minWidth: "250px",
                      }
                    : {}
                }
              >
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="dropdown-header text-primary fw-bold mb-1">
                      <i className="fas fa-graduation-cap me-2"></i>
                      Browse by Category
                    </h6>
                    <NavDropdown.Item
                      as={Link}
                      to="/courses?category=SEG"
                      className="category-item"
                      onClick={handleNavClick}
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <div className="fw-semibold">Automotive & MOT</div>
                          <small className="text-muted">
                            Professional vehicle testing
                          </small>
                        </div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="https://skyaestheticstraining.co.uk/"
                      target="_blank"
                      className="category-item"
                      onClick={handleNavClick}
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <div className="fw-semibold">Beauty & Aesthetics</div>
                          <small className="text-muted">
                            VTCT & ITEC qualifications
                          </small>
                        </div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/courses?category=PERSONS"
                      className="category-item"
                      onClick={handleNavClick}
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <div className="fw-semibold">English & Math</div>
                          <small className="text-muted">
                            Foundation to advanced levels
                          </small>
                        </div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/courses?category=PRO QUAL"
                      className="category-item"
                      onClick={handleNavClick}
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <div className="fw-semibold">Construction</div>
                          <small className="text-muted">
                            Professional certifications
                          </small>
                        </div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/courses?category=TAXI"
                      className="category-item"
                      onClick={handleNavClick}
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <div className="fw-semibold">Taxi & Private Hire</div>
                          <small className="text-muted">
                            Professional driver training
                          </small>
                        </div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/courses?category=ICQ"
                      className="category-item"
                      onClick={handleNavClick}
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <div className="fw-semibold">
                            Education & Training
                          </div>
                          <small className="text-muted">
                            Teaching and assessment qualifications
                          </small>
                        </div>
                      </div>
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item
                      as={Link}
                      to="/courses?category=FUNCTIONAL SKILLS"
                      className="category-item"
                      onClick={handleNavClick}
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <div className="fw-semibold">Functional Skills</div>
                          <small className="text-muted">
                            Practical English and Maths skills
                          </small>
                        </div>
                      </div>
                    </NavDropdown.Item> */}
                  </div>
                  <div className="col-md-6">
                    <h6 className="dropdown-header text-primary fw-bold mb-1">
                      <i className="fas fa-star me-2"></i>
                      Popular Courses
                    </h6>
                    <NavDropdown.Item
                      onClick={() => {
                        handleNavClick();
                        if (course1) {
                          const slug = generateSlug(course1.title);
                          navigate(`/enroll/${slug}`, { state: { course: course1 } });
                        }
                      }}
                      className="popular-item"
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <div className="fw-semibold">Level 2 SQA</div>
                          <div className="fw-semibold">
                            Professional Taxi & Private Hire
                          </div>
                          <div className="fw-semibold">Driver (Wales)</div>

                          <small className="text-success">Most Popular</small>
                        </div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        handleNavClick();
                        if (course2) {
                          const slug = generateSlug(course2.title);
                          navigate(`/enroll/${slug}`, { state: { course: course2 } });
                        }
                      }}
                      className="popular-item"
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <div className="fw-semibold">
                            Level 5 SQA: Professional{" "}
                          </div>
                          <div className="fw-semibold">
                            Taxi & Private Hire Driver Role
                          </div>
                          <div className="fw-semibold">(Scotland)</div>
                          <small className="text-info">High Demand</small>
                        </div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        handleNavClick();
                        if (course3) {
                          const slug = generateSlug(course3.title);
                          navigate(`/enroll/${slug}`, { state: { course: course3 } });
                        }
                      }}
                      className="popular-item"
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <div className="fw-semibold">BTEC Level 2 ICQ:</div>
                          <div className="fw-semibold">
                            Professional Taxi and Private{" "}
                          </div>
                          <div className="fw-semibold">Hire (England)</div>
                          <small className="text-warning">Trending</small>
                        </div>
                      </div>
                    </NavDropdown.Item>
                    <div className="mt-2">
                      <NavDropdown.Item
                        as={Link}
                        to="/courses"
                        className="view-all-btn"
                        onClick={handleNavClick}
                      >
                        <div className="text-center p-2 bg-primary text-white rounded">
                          <i className="fas fa-arrow-right me-2"></i>
                          View All Courses
                        </div>
                      </NavDropdown.Item>
                    </div>
                  </div>
                </div>
              </div>
            </NavDropdown>
            <Nav.Link as={Link} to="/about" onClick={handleNavClick}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/faqs" onClick={handleNavClick}>
              FAQ
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleNavClick}>
              Contact Us
            </Nav.Link>
            {/* Enroll Now Button */}
            <Button
              variant="primary"
              size="sm"
              onClick={handleEnroll}
              className="px-4"
            >
              Enroll Now
            </Button>

            {/* Buttons */}
            {/* <Button
              variant="outline-dark"
              size="sm"
              className="ms-2 my-2 my-lg-0 fw-semibold login-btn"
              onClick={handleNavClick}
            >
              Login
            </Button>

            <Button
              size="sm"
              className="ms-2 my-2 my-lg-0 signup-btn"
              style={{
                backgroundColor: "#02AEF1",
                border: "none",
                color: "white",
              }}
              onClick={handleNavClick}
            >
              Signup
            </Button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
