import React from "react";
import "./home.css";

// Partner logos
import partner01 from "../Assests/partner01.png";
import partner02 from "../Assests/partner02.png";
import partner04 from "../Assests/partner04.png";
import partner05 from "../Assests/partner05.png";
import partner06 from "../Assests/partner06.png";

function Partner() {
  // Use unique logos only (remove duplicates)
  const logos = [partner01, partner02, partner04, partner05, partner06];

  return (
    <section
      className="partners-section"
      style={{
        position: "absolute",
        right: "30px",
        top: 90,
        zIndex: 1,
        padding: "20px 10px 20px 0",
        borderTopLeftRadius: "16px",
        boxShadow: "none",
        background: "none",
        border: "none",
        margin: 0,
        minWidth: "180px",
        overflow: "visible",
      }}
    >
      <div>
        {/* Partners Header */}
        <div className="mb-2" style={{ textAlign: "left" }}>
          <p
            className="mb-0 fw-medium"
            style={{
              fontSize: "13px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "#fff",
              textShadow: "0 1px 4px rgba(0,0,0,0.25)",
            }}
          >
            ACCREDITED BY
          </p>
        </div>

        {/* All Partners Container - Vertical Bottom Left */}
        <div
          className="partner-logos-grid"
          style={{
            display: "grid",
            gridTemplateRows: "repeat(2, auto)",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem 1.5rem",
            justifyItems: "start",
          }}
        >
          {/* First row: 3 logos */}
          {logos.slice(0, 3).map((logo, idx) => (
            <div
              key={idx}
              className="partner-logo-wrapper"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "8px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                filter: "none",
                opacity: "1",
                backgroundColor: "transparent",
                flexShrink: 0,
                width: "100%",
              }}
            >
              <img
                src={logo}
                alt={`Partner ${idx + 1}`}
                style={{
                  maxHeight: "40px",
                  maxWidth: "90px",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
          {/* Second row: 2 logos, empty cell for alignment */}
          {logos.slice(3, 5).map((logo, idx) => (
            <div
              key={idx + 3}
              className="partner-logo-wrapper"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "8px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                filter: "none",
                opacity: "1",
                backgroundColor: "transparent",
                flexShrink: 0,
                width: "100%",
              }}
            >
              <img
                src={logo}
                alt={`Partner ${idx + 4}`}
                style={{
                  maxHeight: "40px",
                  maxWidth: "90px",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
          <div style={{}}></div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
