const express = require('express');
const router = express.Router();

// Sample data for teachers (you'll replace this with database queries)
let teachers = [
  {
    teacher_id: 1,
    name: 'Jason',
    is_active: true,
    designation: 'Professor',
  },
  {
    teacher_id: 5,
    name: 'Jason',
    is_active: true,
    designation: 'Associate Professor',
  },
];

// GET - /teacher/{id} - Get a specific teacher record by ID
router.get('/:id', (req, res) => {
  const teacherId = parseInt(req.params.id);
  const teacher = teachers.find((teacher) => teacher.teacher_id === teacherId);
  if (teacher) {
    res.json(teacher);
  } else {
    res.status(404).json({ error: 'Teacher not found' });
  }
});

// GET - /teacher - Get a list of teachers based on filters
router.get('/', (req, res) => {
  // Get query parameters for filtering
  const { name, is_active } = req.query;

  // Filter teachers based on query parameters
  let filteredTeachers = teachers;
  if (name) {
    filteredTeachers = filteredTeachers.filter((teacher) => teacher.name === name);
  }
  if (is_active) {
    const isActive = is_active.toLowerCase() === 'true';
    filteredTeachers = filteredTeachers.filter((teacher) => teacher.is_active === isActive);
  }

  res.json(filteredTeachers);
});

// POST - /teacher - Create a new teacher record using the JSON payload
router.post('/', (req, res) => {
  const newTeacher = req.body;
  // Assuming the teacher_id is unique (you should handle this differently with a database)
  newTeacher.teacher_id = teachers.length + 1;
  teachers.push(newTeacher);
  res.json(newTeacher);
});

module.exports = router;
