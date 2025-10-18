# Enrollment Page Display - Visual Guide

## What You'll See Now

When you navigate to an enrollment page with a course ID in the URL, the page displays comprehensive course information.

## Display Examples

### Example 1: MOT Class 1 & 2
**URL:** `http://localhost:3000/enroll?id=2`

**Page Header Shows:**
```
┌─────────────────────────────────────────────────────────┐
│           Course Enrollment                              │
│   Take the next step in your professional development    │
│                                                          │
│   [# Course ID: 2]  [✓ MOT Class 1 & 2]                │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Example 2: PROQUAL Site Security
**URL:** `http://localhost:3000/enroll?id=41`

**Page Header Shows:**
```
┌─────────────────────────────────────────────────────────┐
│           Course Enrollment                              │
│   Take the next step in your professional development    │
│                                                          │
│   [# Course ID: 41]  [✓ PROQUAL Level 2 Award in       │
│                          Site Security]                  │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Example 3: ESOL Certificate
**URL:** `http://localhost:3000/enroll?id=15`

**Page Header Shows:**
```
┌─────────────────────────────────────────────────────────┐
│           Course Enrollment                              │
│   Take the next step in your professional development    │
│                                                          │
│   [# Course ID: 15]  [✓ ENTRY 1 A1 - ITEC ESOL         │
│                          CERTIFICATE FOR YOUNG LEARNERS  │
│                          INTERNATIONAL]                  │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Example 4: Course Not Found
**URL:** `http://localhost:3000/enroll?id=999`

**Page Header Shows:**
```
┌─────────────────────────────────────────────────────────┐
│           Course Enrollment                              │
│   Take the next step in your professional development    │
│                                                          │
│   [⚠ Course ID 999 not found]                          │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## Badge Color Coding

### Blue Badge (Info) - Course ID
```html
<Badge bg="info">
  <i className="fas fa-hashtag"></i>
  Course ID: 2
</Badge>
```
**Color:** Light Blue
**Purpose:** Shows the course ID from URL

### Green Badge (Success) - Course Name
```html
<Badge bg="success">
  <i className="fas fa-check-circle"></i>
  MOT Class 1 & 2
</Badge>
```
**Color:** Green
**Purpose:** Shows the course was found and displays its name

### Red Badge (Danger) - Not Found
```html
<Badge bg="danger">
  <i className="fas fa-exclamation-triangle"></i>
  Course ID 999 not found
</Badge>
```
**Color:** Red
**Purpose:** Indicates the course ID doesn't exist

## Complete Page Layout

```
┌────────────────────────────────────────────────────────────┐
│                    ENROLLMENT PAGE                          │
├────────────────────────────────────────────────────────────┤
│                                                             │
│  Course Enrollment                                          │
│  Take the next step in your professional development        │
│                                                             │
│  [# Course ID: 2]  [✓ MOT Class 1 & 2]                    │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  Awarding    │  │   Selected   │  │    Course    │    │
│  │    Body      │  │    Course    │  │   Preview    │    │
│  │              │  │              │  │              │    │
│  │   [Logo]     │  │ MOT Class    │  │   [Image]    │    │
│  │              │  │   1 & 2      │  │              │    │
│  │     SEG      │  │              │  │              │    │
│  │  Automotive  │  │ Description  │  │              │    │
│  │   & MOT      │  │     ...      │  │              │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                             │
│  ┌───────────────────────────────────────────────────┐    │
│  │           ENROLLMENT FORM                          │    │
│  │                                                    │    │
│  │  First Name: [________________]                   │    │
│  │  Last Name:  [________________]                   │    │
│  │  Email:      [________________]                   │    │
│  │  Phone:      [________________]                   │    │
│  │  Course:     [MOT Class 1 & 2] (pre-filled)      │    │
│  │                                                    │    │
│  │  [Submit Enrollment]                              │    │
│  └───────────────────────────────────────────────────┘    │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

## Badge Features

### 1. **Icons**
Each badge includes a Font Awesome icon:
- `fa-hashtag` - For course ID
- `fa-check-circle` - For successful course load
- `fa-exclamation-triangle` - For errors

### 2. **Responsive Design**
Badges wrap on smaller screens:
```css
.d-flex.flex-wrap.gap-2
```

### 3. **Padding**
Larger padding for better visibility:
```css
.px-3.py-2
```

## User Experience Flow

### Scenario 1: Click from Course Card
```
1. User sees course card: "MOT Class 1 & 2"
2. Clicks "ENROLL NOW"
3. URL changes to: /enroll?id=2
4. Page loads and shows:
   - Blue badge: "# Course ID: 2"
   - Green badge: "✓ MOT Class 1 & 2"
5. Course details display below
6. Form is pre-filled with course name
```

### Scenario 2: Direct URL Access
```
1. User receives link: http://yoursite.com/enroll?id=41
2. Opens link in browser
3. Page loads and shows:
   - Blue badge: "# Course ID: 41"
   - Green badge: "✓ PROQUAL Level 2 Award in Site Security"
4. Course details display below
5. Form is pre-filled with course name
```

### Scenario 3: Invalid Course ID
```
1. User navigates to: /enroll?id=999
2. Page loads and shows:
   - Red badge: "⚠ Course ID 999 not found"
3. No course details display
4. Form is empty
```

## Code Implementation

### Badge Display Logic
```javascript
{/* Display Course ID and Name from URL if available */}
{courseId && selectedCourse && (
  <div className="mb-4">
    <div className="d-flex align-items-center justify-content-center flex-wrap gap-2">
      <Badge bg="info" className="px-3 py-2">
        <i className="fas fa-hashtag me-1"></i>
        Course ID: {courseId}
      </Badge>
      <Badge bg="success" className="px-3 py-2">
        <i className="fas fa-check-circle me-1"></i>
        {selectedCourse.title}
      </Badge>
    </div>
  </div>
)}

{/* Show message if course ID in URL but not found */}
{courseId && !selectedCourse && (
  <div className="mb-4">
    <Badge bg="danger" className="px-3 py-2">
      <i className="fas fa-exclamation-triangle me-1"></i>
      Course ID {courseId} not found
    </Badge>
  </div>
)}
```

## Benefits

### ✅ Clear Identification
Users immediately see which course they're enrolling in

### ✅ Confirmation
Green badge confirms the course was found successfully

### ✅ Error Handling
Red badge clearly indicates when a course doesn't exist

### ✅ Professional Look
Icons and color coding create a polished interface

### ✅ Accessibility
Clear visual indicators help all users understand the page state

## Testing

### Test Different Courses:

1. **Short Course Name:**
   - URL: `/enroll?id=2`
   - Shows: `[# Course ID: 2] [✓ MOT Class 1 & 2]`

2. **Long Course Name:**
   - URL: `/enroll?id=15`
   - Shows: `[# Course ID: 15] [✓ ENTRY 1 A1 - ITEC ESOL CERTIFICATE...]`
   - Wraps to multiple lines on mobile

3. **Invalid ID:**
   - URL: `/enroll?id=999`
   - Shows: `[⚠ Course ID 999 not found]`

4. **No ID:**
   - URL: `/enroll`
   - Shows: No badges (normal enrollment page)

## Responsive Behavior

### Desktop (>768px)
```
[# Course ID: 2]  [✓ MOT Class 1 & 2]
```
Badges display side by side

### Mobile (<768px)
```
[# Course ID: 2]
[✓ MOT Class 1 & 2]
```
Badges stack vertically due to flex-wrap

---

**Your enrollment page now shows both course ID and course name!** 🎉

Navigate to any enrollment page and you'll see:
- **Blue badge** with course ID
- **Green badge** with full course name
- **Red badge** if course not found
