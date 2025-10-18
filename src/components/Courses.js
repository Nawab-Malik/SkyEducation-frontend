import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import fileIcon from "../Assests/fileregicon.png";
import forwardIcon from "../Assests/forwardicon.png";
import backwardIcon from "../Assests/backwardicon.png";
import courseData from "./CourseData";
import { generateSlug } from "../utils/courseUtils";

import "./courses.css";

const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();

  const categories = [
    "ALL",
    "SEG",
    "VTCT",
    "PERSONS",
    "PRO QUAL",
    "TAXI",
    "SQA",
    "ICQ",
  ];

  // get courses based on selected category
  const courses = courseData[activeCategory] || [];

  // number of cards to show at once
  const itemsPerPage = 4;

  // slice courses for current "page"
  const visibleCourses = courses.slice(startIndex, startIndex + itemsPerPage);

  // backward button handler
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  // forward button handler
  const handleNext = () => {
    if (startIndex + itemsPerPage < courses.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  // handle enrollment navigation
  const handleEnrollClick = (course) => {
    // Navigate with course slug in URL path for SEO-friendly URLs
    const slug = generateSlug(course.title);
    navigate(`/enroll/${slug}`, { state: { course } });
  };

  // helper function to get awarding body for course badge
  const getAwardingBodyForCourse = (course, category) => {
    // Check if this is one of the PROQUAL courses in ICQ section by ID
    if (category === "ICQ" && [15, 16, 17, 18].includes(course.id)) {
      return "PROQUAL";
    }

    // Fallback to category-based mapping
    const awardingBodyMap = {
      "ICQ": "ICQ"
    };

    return awardingBodyMap[category] || "";
  };

  // helper function to get badge color based on awarding body
  const getBadgeColor = (course) => {
    if (course.img) {
      const imgString = String(course.img);
      if (imgString.includes("proqual")) {
        return "#FF6B35"; // Orange for PROQUAL
      }
    }
    return "#02AEF1"; // Blue for others (ICQ, etc.)
  };
  const getCourseTitleWithAwardingBody = (course, category) => {
    // If category is "ALL", determine awarding body based on course content
    if (category === "ALL") {
      let awardingBody = "";

      // Determine awarding body based on course content/keywords
      const title = course.title.toUpperCase();
      const desc = course.desc.toUpperCase();

      if (title.includes("MOT") || title.includes("TECHNICIAN") || desc.includes("DVSA") || desc.includes("AUTOMOTIVE")) {
        awardingBody = "SEG";
      } else if (title.includes("ESOL") || title.includes("FUNCTIONAL SKILLS") || desc.includes("ENGLISH LANGUAGE") || desc.includes("INTERNATIONAL")) {
        awardingBody = "VTCT";
      } else if (desc.includes("CONSTRUCTION") || desc.includes("SITE SECURITY") || desc.includes("FIRST AID") || desc.includes("HEALTH & SAFETY")) {
        awardingBody = "PRO QUAL";
      } else if (title.includes("TAXI") || title.includes("PRIVATE HIRE") || desc.includes("PASSENGER TRANSPORT")) {
        awardingBody = "SQA";
      } else if (desc.includes("EDUCATION") || desc.includes("TRAINING") || desc.includes("ASSESSING") || desc.includes("TEACHING")) {
        awardingBody = "ICQ";
      } else if (title.includes("ENTRY LEVEL") || title.includes("LEVEL 1") || title.includes("LEVEL 2") || desc.includes("FOUNDATION") || desc.includes("PRACTICAL APPLICATIONS")) {
        awardingBody = "PEARSON";
      }

      // Check if the title already contains the awarding body
      if (awardingBody && !title.includes(awardingBody)) {
        return `${awardingBody} ${course.title}`;
      }

      return course.title;
    }

    const awardingBodyMap = {
      "SEG": "SEG",
      "VTCT": "VTCT",
      "PERSONS": "",
      "PRO QUAL": "PRO QUAL",
      "TAXI": "SQA",
      "SQA": "SQA",
      "ICQ": "ICQ"
    };

    const awardingBody = awardingBodyMap[category];

    // Special case: If category is ICQ but course has PROQUAL image path, use PROQUAL
    if (category === "ICQ" && course.img) {
      const imgString = String(course.img);
      if (imgString.includes("proqual")) {
        return `PROQUAL ${course.title}`;
      }
    }

    // Special case for TAXI: if title already contains "SQA" or "ICQ", don't add prefix
    if (category === "TAXI" && (course.title.toUpperCase().includes("SQA") || course.title.toUpperCase().includes("ICQ"))) {
      return course.title;
    }

    return awardingBody ? `${awardingBody} ${course.title}` : course.title;
  };

  return (
    <section className="py-5 my-4" id="courses">
      <div className="container text-center">
        {/* Heading */}
        <p
          className="text-uppercase fw-semibold"
          style={{
            color: "#02AEF1",
            fontSize: "0.85rem",
            letterSpacing: "0.1rem",
          }}
        >
          Our Courses
        </p>
        <h2 className="fw-bold playfair-display-custom">
          Discover the Right Course for You
        </h2>
        <p className="text-muted">
          Enhance your skills with industry-recognized courses designed for your
          success.
        </p>

        {/* Category Buttons */}
        <div className="category-buttons-container mb-4 mt-5">
          <div className="d-flex justify-content-center align-items-center position-relative">
            <div
              className="category-buttons-wrapper d-flex gap-2 gap-md-3 gap-lg-4"
              style={{
                overflowX: "auto",
                scrollBehavior: "smooth",
                maxWidth: "100%",
                padding: "10px 0",
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE
                WebkitScrollbar: "none", // Chrome/Safari
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setStartIndex(0); // reset to first page when category changes
                  }}
                  className={`btn px-3 py-2 fw-lighter flex-shrink-0 ${
                    activeCategory === cat
                      ? "active-btn "
                      : "inactive-btn border-dark "
                  }`}
                  style={{
                    fontSize: "0.75rem",
                    whiteSpace: "nowrap",
                    minWidth: "fit-content",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <style jsx>{`
            .category-buttons-wrapper::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>

        {/* Courses Grid with navigation icons */}
        <div className="d-flex align-items-center justify-content-center">
          {/* Backward Icon */}
          <button
            className="nav-btn me-2 me-lg-5"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            <img src={backwardIcon} alt="Previous" width="12" />
          </button>

          <div className="row g-3 flex-grow-1 justify-content-center">
            {visibleCourses.map((course) => (
              <div
                key={course.id}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
              >
                <div
                  className="card h-100 shadow-sm border rounded-4"
                  style={{ maxWidth: "300px", margin: "0 auto" }}
                >
                  <div
                    className="position-relative"
                    style={{ height: "200px", overflow: "hidden" }}
                  >
                    <img
                      src={course.img}
                      className="card-img-top rounded-top-4"
                      alt={course.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                    {/* Awarding Body Badge */}
                    <div
                      className="course-category-badge"
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        backgroundColor: getBadgeColor(course),
                        color: "white",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        fontSize: "0.7rem",
                        fontWeight: "bold",
                        zIndex: 2,
                      }}
                    >
                      {getAwardingBodyForCourse(course, activeCategory)}
                    </div>
                  </div>
                  <div
                    className="card-body text-start d-flex flex-column"
                    style={{ padding: "15px" }}
                  >
                    <h6
                      className="fw-bold playfair-display-custom text-dark mb-2"
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.3",
                        height: "40px",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                      title={getCourseTitleWithAwardingBody(course, activeCategory)}
                    >
                      {getCourseTitleWithAwardingBody(course, activeCategory)}
                    </h6>
                    <p
                      className="text-muted mb-3"
                      style={{
                        fontSize: "11px",
                        lineHeight: "1.4",
                        height: "60px",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                      }}
                      title={course.desc}
                    >
                      <img
                        src={fileIcon}
                        alt="file"
                        width="10"
                        height="14"
                        className="me-1"
                      />
                      {course.desc}
                    </p>
                    <button
                      className="w-100 enroll-btn playfair-display-custom fw-medium py-2 mt-auto"
                      onClick={() => handleEnrollClick(course)}
                      style={{
                        fontSize: "12px",
                        borderRadius: "25px",
                        backgroundColor: "#02AEF1",
                        border: "none",
                        color: "white",
                        transition: "all 0.3s ease",
                      }}
                    >
                      ENROLL NOW
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Forward Icon */}
          <button
            className="nav-btn ms-2 ms-lg-5"
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= courses.length}
          >
            <img src={forwardIcon} alt="Next" width="12" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
