# Enrollment Page - URL Query Parameter Guide

## Overview

The enrollment page now supports fetching course information using a course ID from the URL query parameter. This allows users to access specific enrollment pages via direct links.

## URL Structure

### Format:
```
http://localhost:3000/enroll?id={courseId}
```

### Examples:
- `http://localhost:3000/enroll?id=2` - MOT Class 1 & 2
- `http://localhost:3000/enroll?id=5` - Level 3 MOT Management
- `http://localhost:3000/enroll?id=41` - PROQUAL Level 2 Award in Site Security
- `http://localhost:3000/enroll?id=15` - ITEC ESOL Certificate for Young Learners

## How It Works

### 1. **User Clicks "ENROLL NOW"**
```javascript
// Courses.js
const handleEnrollClick = (course) => {
  navigate(`/enroll?id=${course.id}`, { state: { course } });
};
```

### 2. **URL Changes**
```
From: /courses
To:   /enroll?id=2
```

### 3. **Enrollment Page Loads**
```javascript
// Enrollment.js
const [searchParams] = useSearchParams();
const courseId = searchParams.get('id'); // Gets "2" from URL
```

### 4. **Course is Fetched**
```javascript
const findCourseById = (id) => {
  for (const category in courseData) {
    const courses = courseData[category];
    const course = courses.find(c => c.id === id);
    if (course) return course;
  }
  return null;
};
```

### 5. **Course Information Displayed**
- Course title
- Course description
- Course image
- Awarding body logo
- Pre-filled enrollment form

## Features

### ✅ Dual Support
The enrollment page supports **two methods** of receiving course data:

1. **Location State** (from navigation)
   ```javascript
   navigate("/enroll", { state: { course } });
   ```

2. **URL Query Parameter** (from direct link)
   ```javascript
   navigate("/enroll?id=2");
   ```

### ✅ Priority System
```javascript
if (location.state?.course) {
  // Use course from navigation state (Priority 1)
  setSelectedCourse(location.state.course);
} else if (courseId) {
  // Fetch course by ID from URL (Priority 2)
  const foundCourse = findCourseById(parseInt(courseId));
  setSelectedCourse(foundCourse);
}
```

### ✅ Visual Feedback
When a course ID is in the URL, badges are displayed showing both ID and course name:
```
[# Course ID: 2] [✓ MOT Class 1 & 2]
```

If course is not found:
```
[⚠ Course ID 2 not found]
```

## Use Cases

### 1. **Direct Link Sharing**
Share a specific enrollment page:
```
http://localhost:3000/enroll?id=2
```

### 2. **Email Campaigns**
Include enrollment links in emails:
```html
<a href="http://yoursite.com/enroll?id=41">
  Enroll in PROQUAL Level 2 Site Security
</a>
```

### 3. **Bookmarking**
Users can bookmark specific enrollment pages.

### 4. **Navigation from Course Cards**
Clicking "ENROLL NOW" includes the ID in the URL automatically.

## Testing

### Test Different Course IDs:

1. **MOT Courses:**
   - `http://localhost:3000/enroll?id=2` - MOT Class 1 & 2
   - `http://localhost:3000/enroll?id=8` - MOT Class 4 & 7
   - `http://localhost:3000/enroll?id=5` - Level 3 MOT Management

2. **PROQUAL Courses:**
   - `http://localhost:3000/enroll?id=41` - Site Security
   - `http://localhost:3000/enroll?id=42` - First Aid
   - `http://localhost:3000/enroll?id=43` - Health & Safety

3. **ESOL Courses:**
   - `http://localhost:3000/enroll?id=15` - Entry 1 A1
   - `http://localhost:3000/enroll?id=18` - Entry 1 A1 International
   - `http://localhost:3000/enroll?id=47` - Level 1 B2

4. **Education & Training:**
   - `http://localhost:3000/enroll?id=2` - Level 3 Award
   - `http://localhost:3000/enroll?id=3` - Level 3 Certificate
   - `http://localhost:3000/enroll?id=56` - Level 5 Diploma

## Implementation Details

### Files Modified:

1. **src/App.js**
   - Added comment about URL query parameter support

2. **src/components/Courses.js**
   - Updated `handleEnrollClick` to include `?id={courseId}` in URL

3. **src/pages/Enrollment.js**
   - Imported `useSearchParams` hook
   - Imported `courseData` for course lookup
   - Added `findCourseById` function
   - Added state management for `selectedCourse`
   - Added useEffect to fetch course by ID
   - Updated all references from `courseData` to `selectedCourse`
   - Added visual badge showing course ID

## Code Structure

```javascript
// Enrollment.js structure

const EnrollmentPage = () => {
  // 1. Get URL query parameter
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get('id');
  
  // 2. State for selected course
  const [selectedCourse, setSelectedCourse] = useState(null);
  
  // 3. Fetch course on mount or when ID changes
  useEffect(() => {
    if (location.state?.course) {
      setSelectedCourse(location.state.course);
    } else if (courseId) {
      const foundCourse = findCourseById(parseInt(courseId));
      setSelectedCourse(foundCourse);
    }
  }, [courseId, location.state]);
  
  // 4. Helper function to find course
  const findCourseById = (id) => {
    for (const category in courseData) {
      const courses = courseData[category];
      const course = courses.find(c => c.id === id);
      if (course) return course;
    }
    return null;
  };
  
  // 5. Update form when course is selected
  useEffect(() => {
    if (selectedCourse?.title) {
      setFormData(prev => ({
        ...prev,
        course: selectedCourse.title
      }));
    }
  }, [selectedCourse]);
  
  // 6. Render course information
  return (
    <div>
      {courseId && (
        <Badge>Course ID: {courseId}</Badge>
      )}
      {selectedCourse && (
        <div>
          <h4>{selectedCourse.title}</h4>
          <p>{selectedCourse.desc}</p>
          <img src={selectedCourse.img} />
        </div>
      )}
    </div>
  );
};
```

## Benefits

1. **✅ Shareable Links** - Each course has a unique URL
2. **✅ Direct Access** - Users can navigate directly to enrollment
3. **✅ Bookmarkable** - Users can save specific enrollment pages
4. **✅ SEO Friendly** - Each enrollment page has a unique URL
5. **✅ Flexible** - Supports both state and URL parameter methods
6. **✅ User Friendly** - Shows course ID and confirmation badge

## Troubleshooting

### Issue: Course not displaying
**Solution**: Check if the course ID exists in CourseData.js

### Issue: Wrong course showing
**Solution**: Verify the ID in the URL matches the intended course

### Issue: Form not pre-filled
**Solution**: Check that selectedCourse is being set correctly

## Future Enhancements

Potential improvements:

1. Add loading state while fetching course
2. Add error message for invalid course IDs
3. Add redirect to courses page if course not found
4. Add course category to URL for better organization
5. Add analytics tracking for enrollment URLs

---

**Your enrollment page now supports URL-based course selection!** 🎉

Users can access specific enrollment pages via direct links like:
`http://localhost:3000/enroll?id=2`
