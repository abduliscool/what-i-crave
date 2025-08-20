const express = require('express');
const connectDB = require('./db'); // Import the connection function

// Connect to the database
connectDB();

const app = express();

// Middleware to parse the JSON bodies
app.use(express.json());

// Define Routes
app.use('/api/users', require('./routes/users'));

const PORT = 5000;

app.get('/api', (req, res) => {
  res.json({ message: "Hello from the WhatICrave backend!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});