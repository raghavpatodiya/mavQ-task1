// server.js
const express = require('express');
const bodyParser = require('body-parser');

const teacherRoutes = require('./routes/teacher');
const courseRoutes = require('./routes/course');

const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());

// Register routes
app.use('/teacher', teacherRoutes);
app.use('/course', courseRoutes);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
