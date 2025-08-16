const express = require('express');
const connectDB = require('./db'); // Import the connection function

// Connect to the database
connectDB();

const app = express();
const PORT = 5000;

app.get('/api', (req, res) => {
  res.json({ message: "Hello from the WhatICrave backend!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});