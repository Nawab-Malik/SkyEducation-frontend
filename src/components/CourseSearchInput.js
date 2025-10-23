import React, { useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import courseData from "./CourseData";

const CourseSearchInput = ({
  value,
  onChange,
  required = false,
  disabled = false,
}) => {
  const [searchTerm, setSearchTerm] = useState(value || "");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);
  useEffect(() => {
    if (!disabled) {
      setSearchTerm(value || "");
    }
  }, [value, disabled]);

  // Flatten all courses into single array
  const allCourses = Object.values(courseData)
    .flat()
    .filter(
      (course, index, self) =>
        index === self.findIndex((c) => c.title === course.title)
    );

  // Improved search with better level matching
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!searchTerm.trim()) {
        setSuggestions([]);
        return;
      }

      const searchLower = searchTerm.toLowerCase().trim();

      // Extract level number from different formats
      let searchLevel = null;

      // Check for "level X" format
      const levelMatch = searchLower.match(/level\s*([1-9])/i);
      if (levelMatch) {
        searchLevel = levelMatch[1];
      } else {
        // Check for single number
        const numberMatch = searchLower.match(/^[1-9]$/);
        if (numberMatch) {
          searchLevel = numberMatch[0];
        }
      }

      const filtered = allCourses.filter((course) => {
        const title = course.title.toLowerCase();

        // For level searches
        if (searchLevel) {
          // Look for exact level match
          const courseLevelMatch = title.match(/level\s*([1-9])/i);
          if (courseLevelMatch && courseLevelMatch[1] === searchLevel) {
            return true;
          }
        }

        // For other searches
        return title.includes(searchLower);
      });

      // Improved sorting with better level matching
      const sortedResults = filtered.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();

        // For level searches
        if (searchLevel) {
          // Check exact "Level X" match
          const exactLevelPattern = new RegExp(
            `^level\\s*${searchLevel}\\b`,
            "i"
          );
          const aExactLevel = exactLevelPattern.test(titleA);
          const bExactLevel = exactLevelPattern.test(titleB);

          if (aExactLevel && !bExactLevel) return -1;
          if (!aExactLevel && bExactLevel) return 1;

          // Then check if contains "Level X" anywhere
          const levelPattern = new RegExp(`level\\s*${searchLevel}\\b`, "i");
          const aHasLevel = levelPattern.test(titleA);
          const bHasLevel = levelPattern.test(titleB);

          if (aHasLevel && !bHasLevel) return -1;
          if (!aHasLevel && bHasLevel) return 1;
        }

        // For non-level searches
        if (titleA === searchLower) return -1;
        if (titleB === searchLower) return 1;

        if (titleA.startsWith(searchLower)) return -1;
        if (titleB.startsWith(searchLower)) return 1;

        return 0;
      });

      setSuggestions(sortedResults);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!showSuggestions || disabled) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleSelect(suggestions[selectedIndex].title);
        }
        break;
      case "Escape":
        setShowSuggestions(false);
        break;
      default:
        break;
    }
  };

  const handleSelect = (title) => {
    if (disabled) return;
    setSearchTerm(title);
    onChange(title);
    setShowSuggestions(false);
    setSelectedIndex(-1);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(e.target) &&
        inputRef.current &&
        !inputRef.current.contains(e.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="position-relative">
      <Form.Control
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={(e) => {
          if (!disabled) {
            setSearchTerm(e.target.value);
            setShowSuggestions(true);
            setSelectedIndex(-1);
          }
        }}
        onFocus={() => !disabled && setShowSuggestions(true)}
        onKeyDown={handleKeyDown}
        placeholder="Search by course name or level (e.g. '1,2' or just 'level,Award, and other Keywords')"
        required={required}
        disabled={disabled}
      />

      {showSuggestions && !disabled && (
        <div
          ref={suggestionsRef}
          className="position-absolute w-100 mt-1 shadow-sm bg-white rounded border"
          style={{
            maxHeight: "300px",
            overflowY: "auto",
            zIndex: 1000,
          }}
        >
          {suggestions.length > 0
            ? suggestions.map((course, index) => (
                <div
                  key={course.id}
                  className={`p-2 ${index === selectedIndex ? "bg-light" : ""}`}
                  onClick={() => handleSelect(course.title)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="fw-medium">{course.title}</div>
                  <small className="text-muted d-block">
                    {course.title.match(/level\s*[0-9]+/i)?.[0] || ""}
                  </small>
                </div>
              ))
            : searchTerm && (
                <div className="p-3 text-muted text-center">
                  No courses found matching "{searchTerm}"
                </div>
              )}
        </div>
      )}
    </div>
  );
};

export default CourseSearchInput;
