const express = require('express');
const router = express.Router();

// Sample data for courses (you'll replace this with database queries)
let courses = [
  {
    course_id: 1,
    Course_mentor: {
      teacher_id: 6,
      name: 'John',
      is_active: true,
      designation: 'Assistant Professor',
    },
    name: 'Introduction to Devops',
    start_date: '2024-01-01',
    end_date: '2024-02-02',
    description: 'Basic concepts of DevOps',
    is_active: true,
  },
];

// GET - /course - Get a list of courses based on filters
router.get('/', (req, res) => {
  // Get query parameters for filtering
  const { name, is_active } = req.query;

  // Filter courses based on query parameters
  let filteredCourses = courses;
  if (name) {
    filteredCourses = filteredCourses.filter((course) => course.name === name);
  }
  if (is_active) {
    const isActive = is_active.toLowerCase() === 'true';
    filteredCourses = filteredCourses.filter((course) => course.is_active === isActive);
  }

  res.json(filteredCourses);
});

// POST - /course - Create a new course using the JSON payload
router.post('/', (req, res) => {
  const newCourse = req.body;
  // Assuming the course_id is unique (you should handle this differently with a database)
  newCourse.course_id = courses.length + 1;
  courses.push(newCourse);
  res.json(newCourse);
});

// GET - /course/{id}
router.get('/:id', (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courses.find((course) => course.course_id === courseId);
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ error: 'Course not found' });
  }
});

module.exports = router;
