import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import logo from "../Assests/logo00.png";
import searchWhite from "../Assests/searchiconwhite.png";
import courseData from "./CourseData";
import "./home.css";

// Partner logos
import partner00 from "../Assests/partner00.png";
import partner01 from "../Assests/partner01.png";
import partner02 from "../Assests/partner02.png";
import partner04 from "../Assests/partner04.png";
import partner05 from "../Assests/partner05.png";
import partner06 from "../Assests/partner06.png";

function Hero() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [categorySearchTerm, setCategorySearchTerm] = useState("");
  const [courseSearchTerm, setCourseSearchTerm] = useState("");
  const navigate = useNavigate();

  // Particles init
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Use unique logos only (remove duplicates)
  const logos = [
    partner00,
    partner01,
    partner02,
    partner04,
    partner05,
    partner06,
  ];
  // Map awarding body by category key used in Hero
  const getAwardingBodyForCategory = (key) => {
    switch (key) {
      case "PERSONS":
        return "PEARSON";
      case "VTCT":
        return "VTCT";
      case "ICQ":
        return "ICQ";
      case "SEG":
        return "SKILLS AND EDUCATION GROUP AWARDS";
      case "SQA":
      case "TAXI":
        return "SQA";
      default:
        return "";
    }
  };

  // Helper: find Level 4 courses by scanning titles
  const isLevel4Course = (title) => /(^|\s)Level\s*4\b|(^|\s)LEVEL\s*4\b/i.test(title);

  // Build category courses with awarding body prefixes and Level 4 relocation
  const buildCoursesForCategory = (catKey) => {
    const awarding = getAwardingBodyForCategory(catKey);

    // Gather courses for requested category
    const base = catKey && catKey !== "ALL" ? (courseData[catKey] || []) : [];

    // Collect Level 4 from all categories other than ICQ
    const allCategoryKeys = Object.keys(courseData).filter(
      (k) => Array.isArray(courseData[k]) && k !== "ALL"
    );
    const level4FromOthers = allCategoryKeys
      .filter((k) => k !== "ICQ")
      .flatMap((k) => (courseData[k] || []).filter((c) => isLevel4Course(c.title)));

    if (!catKey || catKey === "ALL") {
      // For ALL: show every course, but move Level 4 into ICQ group by prefix only
      const allCourses = allCategoryKeys.flatMap((k) => (courseData[k] || []).filter((c) => ! [70, 71, 72, 73, 74].includes(c.id)));
      return allCourses.map((c) => {
        // Determine awarding by source category
        const srcKey = allCategoryKeys.find((k) => (courseData[k] || []).some((x) => x.id === c.id)) || "";
        let award = getAwardingBodyForCategory(srcKey);

        // Special case: Don't add awarding body for BTEC courses
        if (c.title.includes("BTEC")) {
          award = "";
        }

        const displayTitle = award ? `${award} ${c.title}` : c.title;
        return { ...c, displayTitle };
      });
    }

    if (catKey === "ICQ") {
      // ICQ gets its original courses + all Level 4 courses from other categories
      const icqCourses = (courseData["ICQ"] || []).map((c) => {
        // Check if this is one of the 9 VTCT courses
        const isVtctCourse = [2, 4, 56, 57, 70, 71, 72, 73, 74].includes(c.id);
        const courseAwarding = isVtctCourse ? "VTCT" : (c.img && c.img.includes("proqual") ? "PROQUAL" : awarding);
        return {
          ...c,
          displayTitle: courseAwarding ? `${courseAwarding} ${c.title}` : c.title,
        };
      });

      // Group courses in the organized order
      const firstThreeICQ = icqCourses.filter(course => [3, 9, 10].includes(course.id));
      const vtctCourses = icqCourses.filter(course => [2, 4, 56, 57, 70, 71, 72, 73, 74].includes(course.id));
      const proqualCourses = icqCourses.filter(course => [15, 16, 17, 18].includes(course.id));

      const organizedCourses = [
        ...firstThreeICQ,
        ...vtctCourses,
        ...proqualCourses
      ];

      const relocated = level4FromOthers.map((c) => {
        // Check if course has PROQUAL image path - if so, use PROQUAL instead of ICQ
        const courseAwarding = c.img && c.img.includes("proqual") ? "PROQUAL" : awarding;
        return {
          ...c,
          displayTitle: courseAwarding ? `${courseAwarding} ${c.title}` : c.title,
        };
      });
      // Remove duplicates by id
      const seen = new Set();
      return [...organizedCourses, ...relocated].filter((c) => {
        if (seen.has(c.id)) return false;
        seen.add(c.id);
        return true;
      });
    }

    // Non-ICQ: exclude Level 4 courses and specific VTCT courses
    const filteredCourses = base.filter((c) => !isLevel4Course(c.title) && ! [70, 71, 72, 73, 74].includes(c.id));

    // For PERSONS category, prioritize Pearson Entry Level and Functional Skills courses (IDs: 5, 4, 3, 10, 9, 8, 75, 76, 77, 78)
    if (catKey === "PERSONS") {
      const pearsonCourses = filteredCourses.filter((c) => [5, 4, 3, 10, 9, 8, 75, 76, 77, 78].includes(c.id));
      const otherCourses = filteredCourses.filter((c) => ![5, 4, 3, 10, 9, 8, 75, 76, 77, 78].includes(c.id));

      return [...pearsonCourses, ...otherCourses].map((c) => {
        let displayTitle = c.title;
        let courseAwarding = getAwardingBodyForCategory(catKey);

        // Special handling for TAXI category
        if (catKey === "TAXI") {
          // If course title contains BTEC, don't add awarding body prefix
          if (c.title.includes("BTEC")) {
            courseAwarding = "";
          }
          // Otherwise use SQA as default for TAXI category
        }

        // Handle PERSONS category courses (both PEARSON and VTCT)
        if (catKey === "PERSONS") {
          // Check if this is a VTCT Functional Skills course (already has VTCT in title)
          if (c.title.includes("VTCT FUNCTIONAL SKILLS")) {
            // VTCT courses already have proper format, just use as is
            displayTitle = c.title;
            courseAwarding = ""; // Don't add prefix since it's already in the title
          } else {
            // PEARSON courses - format them
            const levelMatch = c.title.match(/(Entry Level \d+|Level \d+)/i);
            const subjectMatch = c.title.match(/(English|Maths|Math)/i);

            if (levelMatch && subjectMatch) {
              const level = levelMatch[0];
              const subject = subjectMatch[0];
              displayTitle = `FUNCTIONAL SKILLS ${level} ${subject}`;
              courseAwarding = "PEARSON";
            }
          }
        }

        return {
          ...c,
          displayTitle: courseAwarding ? `${courseAwarding} ${displayTitle}` : displayTitle
        };
      });
    }

    // For other categories, use the original logic
    return filteredCourses.map((c) => {
      let displayTitle = c.title;
      let courseAwarding = getAwardingBodyForCategory(catKey);

      // Special handling for TAXI category
      if (catKey === "TAXI") {
        // If course title contains BTEC, don't add awarding body prefix
        if (c.title.includes("BTEC")) {
          courseAwarding = "";
        }
        // Otherwise use SQA as default for TAXI category
      }

      // Handle VTCT category courses - add FUNCTIONAL SKILLS for ESOL courses
      if (catKey === "VTCT") {
        // For ESOL courses, add FUNCTIONAL SKILLS after VTCT
        if (c.title.includes("ESOL") || c.title.includes("ITEC")) {
          displayTitle = `FUNCTIONAL SKILLS ${c.title}`;
        }
      }

      return {
        ...c,
        displayTitle: courseAwarding ? `${courseAwarding} ${displayTitle}` : displayTitle
      };
    });
  };

  const categories = [
    { key: "ALL", name: "All Courses" },
    { key: "SEG", name: "Automotive & MOT" },
    { key: "VTCT", name: "ESOL Certificates" },
    { key: "PERSONS", name: "English & Math" },
    { key: "PRO QUAL", name: "Construction" },
    { key: "TAXI", name: "Taxi & Private Hire" },
    { key: "ICQ", name: "Education & Training" },
  ];

  const getCoursesForCategory = () => {
    if (!selectedCategory || selectedCategory === "ALL") {
      return buildCoursesForCategory("ALL");
    }
    return buildCoursesForCategory(selectedCategory);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category.key);
    setCategorySearchTerm(category.name);
    setSelectedCourse("");
    setCourseSearchTerm("");
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course.id);
    setCourseSearchTerm(course.displayTitle || course.title);
  };

  const handleSearch = () => {
    if (selectedCourse && selectedCategory) {
      // Navigate to courses page with selected course data
      navigate("/courses", {
        state: {
          selectedCategory: selectedCategory,
          selectedCourseId: selectedCourse,
          scrollToCourse: true
        }
      });
    } else if (selectedCategory) {
      // Navigate to courses page with selected category
      navigate("/courses", {
        state: {
          selectedCategory: selectedCategory,
          scrollToCourse: false
        }
      });
    } else {
      // Navigate to courses page without specific selection
      navigate("/courses");
    }
  };
  return (
    <section
      className="hero-section text-light pt-20 d-flex align-items-center position-relative"
      style={{
        background: "linear-gradient(135deg, #02AEF1 0%, #0EA5E9 100%)",
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        minHeight: "100vh",
      }}
    >
      <Particles
        id="tsparticles-hero"
        init={particlesInit}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              outModes: "out",
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
          },
          detectRetina: true,
        }}
      />
      <Container className="pt-5" style={{ position: "relative", zIndex: 2 }}>
        <Row className="align-items-center overflow-hidden">
          <Col md={6}>
            <small
              className="text-uppercase d-flex align-items-center ls-1"
              style={{ fontSize: "11px" }}
            >
              Learning, Education, Training
            </small>

            <h1 className="display-5 fw-bold mt- pt- playfair-display-custom">
              Sky Education <br /> Manchester Reach <br /> For the Sky
            </h1>
            <p className="mt-3" style={{ fontSize: "12px" }}>
              At Sky Education, we are dedicated to fostering learning and
              development across a broad spectrum of disciplines, from health
              and beauty to public services and education.
            </p>
            <div className="mt-3 p-2 bg-light text-dark rounded-2 d-inline-block">
              <p className="mb-0 fw-bold" style={{ fontSize: "20px" }}>
                ✓ We deliver Ofqual regulated courses
              </p>
            </div>
          </Col>

          <Col
            md={6}
            className="d-flex flex-column align-items-end justify-content-center"
          >
            {/* Accreditation Logos Section */}
            <div className="mb-2 pt-2 mt-5 accreditation-mobile-center">
              <div className="text-center mb-3">
                <p
                  className="mb-0 text-light fw-medium"
                  style={{
                    fontSize: "14px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    opacity: "0.9",
                  }}
                >
                  ACCREDITED BY
                </p>
              </div>

              <div className="d-flex align-items-center justify-content-center">
                <div
                  className="d-grid partner-logos-container"
                  style={{
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "0.8rem",
                    padding: "5px 0",
                    overflow: "visible",
                    maxWidth: "350px",
                  }}
                >
                  {logos.map((logo, idx) => (
                    <div
                      key={idx}
                      className="partner-logo-wrapper"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        borderRadius: "12px",
                        transition: "all 0.3s ease",
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        flexShrink: 0,
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                        width: "150px",
                        height: "100px",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.backgroundColor =
                          "rgba(255, 255, 255, 1)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 12px rgba(0, 0, 0, 0.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.backgroundColor =
                          "rgba(255, 255, 255, 0.95)";
                        e.currentTarget.style.boxShadow =
                          "0 2px 8px rgba(0, 0, 0, 0.1)";
                      }}
                    >
                      <img
                        src={logo}
                        alt={`Accredited by Partner ${idx + 1}`}
                        style={{
                          maxHeight: "65px",
                          maxWidth: "130px",
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>

          {/* Updated Search Box */}
          <div
            className="d-flex align-items-center justify-content-between bg-white shadow-sm px-2 px-sm-5 py-4 py-md-2 w-100 my-4 search-box overflow-hidden"
            style={{ maxWidth: "75%" }}
          >
            {/* Course Category */}
            <div
              className="d-flex flex-column px-2 mb-2 mb-sm-0"
              style={{ minWidth: "300px", width: "350px" }}
            >
              <label className="blue mb-1 text-start fw-semibold">
                Course Category
              </label>
              <div className="search-input-wrapper position-relative">
                <Form.Select
                  value={selectedCategory}
                  onChange={(e) => {
                    const categoryKey = e.target.value;
                    const category = categories.find(
                      (cat) => cat.key === categoryKey
                    );
                    if (category) {
                      handleCategorySelect(category);
                    }
                  }}
                  className="search-input border-0 border-bottom border-black rounded-0 shadow-none px-0"
                  style={{ width: "100%", backgroundColor: "transparent" }}
                >
                  <option value="">Select Course Category...</option>
                  {categories.map((category) => (
                    <option key={category.key} value={category.key}>
                      {category.name}
                    </option>
                  ))}
                </Form.Select>
              </div>
            </div>

            {/* Course Name */}
            <div
              className="d-flex flex-column px-2 ms-sm-2 mb-2 mb-sm-0"
              style={{ minWidth: "300px", width: "350px" }}
            >
              <label className="blue mb-1 text-start fw-semibold">
                Course Name
              </label>
              <div className="search-input-wrapper position-relative">
                <Form.Select
                  value={selectedCourse}
                  onChange={(e) => {
                    const courseId = parseInt(e.target.value);
                    const course = getCoursesForCategory().find(
                      (c) => c.id === courseId
                    );
                    if (course) {
                      handleCourseSelect(course);
                    }
                  }}
                  disabled={!selectedCategory || selectedCategory === "ALL"}
                  className="search-input border-0 border-bottom border-black rounded-0 shadow-none px-0"
                  style={{ width: "100%", backgroundColor: "transparent" }}
                >
                  <option value="">
                    {selectedCategory
                      ? "Select a Course..."
                      : "First select a category"}
                  </option>
                  {selectedCategory && selectedCategory !== "ALL" &&
                    getCoursesForCategory().map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.displayTitle || course.title}
                      </option>
                    ))}
                </Form.Select>
              </div>
            </div>

            {/* Search Button */}
            <Button
              onClick={handleSearch}
              style={{
                backgroundColor: "#02AEF1",
                border: "none",
                height: "28px",
              }}
              className="rounded-pill px-4 py-4 mt-2 ms-sm-2 d-flex align-items-center justify-content-center search-btn"
            >
              Search
              <img
                src={searchWhite}
                alt="Search"
                style={{ width: "18px", marginLeft: "6px" }}
              />
            </Button>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
