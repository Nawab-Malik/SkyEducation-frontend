// Utility functions for course operations

/**
 * Generate a URL-friendly slug from course title
 * @param {string} title - Course title
 * @returns {string} - URL-friendly slug
 */
export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

/**
 * Find course by slug across all categories
 * @param {object} courseData - All course data
 * @param {string} slug - Course slug
 * @returns {object|null} - Course object or null
 */
export const findCourseBySlug = (courseData, slug) => {
  for (const category in courseData) {
    const courses = courseData[category];
    const course = courses.find(c => generateSlug(c.title) === slug);
    if (course) {
      return course;
    }
  }
  return null;
};

/**
 * Find course by ID across all categories
 * @param {object} courseData - All course data
 * @param {number} id - Course ID
 * @returns {object|null} - Course object or null
 */
export const findCourseById = (courseData, id) => {
  for (const category in courseData) {
    const courses = courseData[category];
    const course = courses.find(c => c.id === id);
    if (course) {
      return course;
    }
  }
  return null;
};
