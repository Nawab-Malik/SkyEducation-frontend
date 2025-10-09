import React, { useState, useMemo, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
  Badge,
} from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import courseData from "../components/CourseData";
import searchIconDark from "../Assests/searchicondark.png";
import Footer from "../components/Footer";
import "./courses.css";

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Handle URL query parameters and navigation from Hero component
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const categoryFromUrl = urlParams.get("category");

    if (categoryFromUrl) {
      // Validate that the category exists in our courseData
      if (courseData[categoryFromUrl]) {
        setSelectedCategory(categoryFromUrl);
      }
    } else if (location.state?.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
    }

    // Handle scrolling to specific course from Hero search
    if (location.state?.scrollToCourse && location.state?.selectedCourseId) {
      setTimeout(() => {
        const courseElement = document.getElementById(
          `course-${location.state.selectedCourseId}`
        );
        if (courseElement) {
          courseElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
          // Optionally highlight the course briefly
          courseElement.style.backgroundColor = "#e3f2fd";
          setTimeout(() => {
            courseElement.style.backgroundColor = "";
          }, 2000);
        }
      }, 500);
    }
  }, [location.search, location.state]);

  const categories = [
    { key: "ALL", name: "All Courses", count: courseData.ALL.length },
    { key: "SEG", name: "Automotive & MOT", count: courseData.SEG.length },
    {
      key: "VTCT",
      name: "Beauty & Aesthetics",
      count: courseData.VTCT.length,
    },
    {
      key: "PERSONS",
      name: "English & Math",
      count: courseData.PERSONS.length,
    },
    {
      key: "PRO QUAL",
      name: "Construction",
      count: courseData["PRO QUAL"].length,
    },
    { key: "TAXI", name: "Taxi & Private Hire", count: courseData.TAXI.length },
    // { key: "SQA", name: "SQA", count: courseData.SQA.length },
    { key: "ICQ", name: "Education & Training", count: courseData.ICQ.length },
  ];

  const filteredAndSortedCourses = useMemo(() => {
    let courses = courseData[selectedCategory] || [];

    // Filter by search term
    if (searchTerm) {
      courses = courses.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // For ALL category, exclude specific VTCT courses that should only be in Education & Training
    if (selectedCategory === "ALL") {
      courses = courses.filter(
        (course) => ![70, 71, 72, 73, 74].includes(course.id)
      );
    }

    // Group courses by awarding body sections for ICQ category
    if (selectedCategory === "ICQ") {
      const firstThreeICQ = courses.filter((course) =>
        [3, 9, 10].includes(course.id)
      );
      const vtctCourses = courses.filter((course) =>
        [2, 4, 56, 57, 70, 71, 72, 73, 74].includes(course.id)
      );
      const proqualCourses = courses.filter((course) =>
        [15, 16, 17, 18].includes(course.id)
      );

      // Sort within each group
      firstThreeICQ.sort((a, b) => a.title.localeCompare(b.title));
      vtctCourses.sort((a, b) => a.title.localeCompare(b.title));
      proqualCourses.sort((a, b) => a.title.localeCompare(b.title));

      return [...firstThreeICQ, ...vtctCourses, ...proqualCourses];
    }

    // Sort courses - special handling for specific categories
    if (selectedCategory === "PERSONS") {
      // For English & Math, maintain the predefined order (English first, then Maths)
      // Don't sort alphabetically to preserve the intended grouping
    } else {
      // Sort courses alphabetically by title for other categories
      courses.sort((a, b) => a.title.localeCompare(b.title));
    }

    return courses;
  }, [selectedCategory, searchTerm]);

  const getCategoryBadgeColor = (course) => {
    // Special handling for PROQUAL courses - return orange
    if (course && course.img && String(course.img).includes("proqual")) {
      return "warning"; // Orange color for PROQUAL
    }

    // Always return primary (blue) for consistent branding
    return "primary";
  };

  const handleEnrollClick = (course) => {
    navigate("/enroll", { state: { course } });
  };

  return (
    <div style={{ marginTop: "80px" }}>
      <Container fluid className="py-5">
        <Container>
          {/* Header Section */}
          <div className="text-center mb-5">
            <p className="text-uppercase fw-semibold text-primary mb-2">
              Explore Our Courses
            </p>
            <h1 className="fw-bold mb-3">Professional Training Programs</h1>
            <p className="text-muted lead">
              Advance your career with industry-recognized qualifications and
              expert training
            </p>
          </div>

          {/* Search Bar */}
          <Row className="mb-4 justify-content-center">
            <Col lg={8} md={10} className="mb-3">
              <InputGroup size="lg">
                <Form.Control
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-end-0 py-3"
                  style={{ fontSize: "1.1rem" }}
                />
                <InputGroup.Text className="bg-white border-start-0 px-4">
                  <img
                    src={searchIconDark}
                    alt="search"
                    width="20"
                    height="20"
                  />
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>

          <Row>
            {/* Category Sidebar */}
            <Col lg={3} className="mb-4">
              <Card className="shadow-sm">
                <Card.Header className="bg-primary text-white">
                  <h5 className="mb-0">Course Categories</h5>
                </Card.Header>
                <Card.Body className="p-0">
                  {categories.map((category) => (
                    <div
                      key={category.key}
                      className={`p-3 border-bottom cursor-pointer category-item ${
                        selectedCategory === category.key
                          ? "active-category"
                          : ""
                      }`}
                      onClick={() => {
                        if (category.isExternal) {
                          window.open(category.link, "_blank");
                        } else {
                          setSelectedCategory(category.key);

                          // Update URL to reflect selected category
                          if (category.key === "ALL") {
                            navigate("/courses", { replace: true });
                          } else {
                            navigate(`/courses?category=${category.key}`, {
                              replace: true,
                            });
                          }
                        }
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-medium">{category.name}</span>
                        <Badge bg={getCategoryBadgeColor()} className="ms-2">
                          {category.count}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>

            {/* Courses Grid */}
            <Col lg={9}>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0">
                  {categories.find((cat) => cat.key === selectedCategory)
                    ?.name || "All Courses"}
                  <span className="text-muted fs-6 ms-2">
                    ({filteredAndSortedCourses.length} courses)
                  </span>
                </h4>
              </div>

              {filteredAndSortedCourses.length === 0 ? (
                <div className="text-center py-5">
                  <h5 className="text-muted">No courses found</h5>
                  <p className="text-muted">
                    Try adjusting your search or filters
                  </p>
                </div>
              ) : (
                <Row>
                  {filteredAndSortedCourses.map((course) => (
                    <Col
                      lg={4}
                      md={6}
                      className="mb-4"
                      key={`${course.id}-${selectedCategory}`}
                    >
                      <Card
                        className="h-100 shadow-sm border-0 course-card"
                        id={`course-${course.id}`}
                      >
                        <div className="position-relative">
                          <Card.Img
                            variant="top"
                            src={course.img}
                            alt={course.title}
                            className="course-image"
                            style={{ height: "200px", objectFit: "cover" }}
                          />
                          <Badge
                            bg={getCategoryBadgeColor(course)}
                            className="position-absolute top-0 end-0 m-2"
                          >
                            {(() => {
                              // Special handling for 9 VTCT courses in ICQ section
                              if (
                                selectedCategory === "ICQ" &&
                                (course.id === 2 ||
                                  course.id === 4 ||
                                  course.id === 56 ||
                                  course.id === 57 ||
                                  course.id === 70 ||
                                  course.id === 71 ||
                                  course.id === 72 ||
                                  course.id === 73 ||
                                  course.id === 74)
                              ) {
                                return "VTCT";
                              }

                              // Special handling for PROQUAL courses in ICQ section
                              if (
                                selectedCategory === "ICQ" &&
                                course.img &&
                                String(course.img).includes("proqual")
                              ) {
                                return "PROQUAL";
                              }

                              // Special handling for TAXI category to show SQA/ICQ badges
                              if (selectedCategory === "TAXI") {
                                if (
                                  course.title.includes("SQA") ||
                                  course.id === 1 ||
                                  course.id === 2
                                ) {
                                  return "SQA";
                                } else if (
                                  course.title.includes("ICQ") ||
                                  course.title.includes("BTEC") ||
                                  course.id === 46
                                ) {
                                  return "ICQ";
                                }
                                return "TAXI";
                              }

                              // Special handling for VTCT courses (even when in PERSONS category)
                              if (
                                course.title.includes(
                                  "VTCT FUNCTIONAL SKILLS"
                                ) ||
                                course.img.includes("vtct")
                              ) {
                                return "VTCT";
                              }

                              // Special handling for ICQ courses that appear in SQA category
                              if (
                                course.id === 46 ||
                                course.title.includes(
                                  "Introduction to the Role of the Professional Taxi"
                                ) ||
                                course.title.includes("BTEC Level 2 ICQ") ||
                                course.title.includes("ICQ")
                              ) {
                                return "ICQ";
                              }
                              return selectedCategory !== "ALL"
                                ? selectedCategory
                                : "Featured";
                            })()}
                          </Badge>
                        </div>
                        <Card.Body className="d-flex flex-column">
                          <Card.Title
                            className="fw-bold mb-2"
                            style={{ fontSize: "1.1rem" }}
                          >
                            {course.title}
                          </Card.Title>
                          <Card.Text
                            className="text-muted flex-grow-1"
                            style={{ fontSize: "0.9rem" }}
                          >
                            {course.desc}
                          </Card.Text>

                          {/* Special booking button for taxi courses */}
                          {/* {[1, 2, 46].includes(course.id) && (
                            <div className="mt-3 p-3 bg-light rounded">
                              <div className="text-center mb-2">
                                <Badge bg="success" className="fs-6 px-3 py-2">
                                  £100 deposit
                                </Badge>
                              </div>
                              <Button
                                variant="success"
                                className="w-100 fw-bold"
                                style={{
                                  backgroundColor: "#28a745",
                                  border: "none",
                                  padding: "8px",
                                  fontSize: "0.9rem",
                                }}
                                onClick={() => {
                                  window.open(
                                    "https://buy.stripe.com/bJe4gBb8LcynaNj6gZ0Ba01",
                                    "_blank"
                                  );
                                }}
                              >
                                📅 BOOK YOUR SLOT NOW
                              </Button>
                            </div>
                          )}

                          {/* Regular enroll button for non-taxi courses */}
                          {![1, 2, 46].includes(course.id) && (
                            <div className="mt-auto">
                              <Button
                                variant="primary"
                                className="w-100 fw-medium enroll-btn"
                                style={{
                                  backgroundColor: "#02AEF1",
                                  border: "none",
                                }}
                                onClick={() => handleEnrollClick(course)}
                              >
                                ENROLL NOW
                              </Button>
                            </div>
                          )}

                          {/* Enroll button for taxi courses */}
                          {[1, 2, 46].includes(course.id) && (
                            <div className="mt-auto">
                              <Button
                                variant="primary"
                                className="w-100 fw-medium enroll-btn"
                                style={{
                                  backgroundColor: "#02AEF1",
                                  border: "none",
                                }}
                                onClick={() => handleEnrollClick(course)}
                              >
                                ENROLL NOW
                              </Button>
                            </div>
                          )}
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              )}
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default CoursesPage;
