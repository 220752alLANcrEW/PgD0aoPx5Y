// 代码生成时间: 2025-09-21 03:55:32
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

// Create Express app
const app = express();

// Use body-parser middleware to parse JSON bodies
app.use(bodyParser.json());

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yourUsername',
  password: 'yourPassword',
  database: 'yourDatabase'
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

// Middleware to sanitize user inputs to prevent SQL injection
function sanitizeInput(input) {
  if (typeof input === 'string') {
    return input.replace(/['\';<>]/g, '');
  } else {
    return input;
  }
}

// Simple API to get user data
app.get('/api/users/:id', (req, res) => {
  try {
    // Sanitize input
    const userId = sanitizeInput(req.params.id);
    
    // Prepare SQL query
    const sqlQuery = 'SELECT * FROM users WHERE id = ?';
    
    // Execute query with sanitized input
    connection.query(sqlQuery, [userId], (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  } catch (error) {
    res.status(500).send('An error occurred: ' + error.message);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});