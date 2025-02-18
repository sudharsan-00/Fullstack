const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your DB username
  password: '17012005@Vsj', // Replace with your DB password
  database: 'project_management', // Replace with your DB name
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

// API to add a contribution
app.post('/api/contributions', (req, res) => {
  const { projectId, studentName, role } = req.body;

  if (!projectId || !studentName || !role) {
    return res.status(400).send('All fields are required');
  }

  const sql = 'INSERT INTO contributions (project_id, student_name, role) VALUES (?, ?, ?)';
  db.query(sql, [projectId, studentName, role], (err, result) => {
    if (err) throw err;
    res.status(201).send({ message: 'Contribution added successfully', id: result.insertId });
  });
});

// API to get contributions by project ID
app.get('/api/contributions/:projectId', (req, res) => {
  const projectId = req.params.projectId;

  const sql = 'SELECT * FROM contributions WHERE project_id = ?';
  db.query(sql, [projectId], (err, results) => {
    if (err) throw err;
    res.status(200).send(results);
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

