const express = require('express');
const app = express();
const PORT = 5000;

// A simple test route to make sure the server is working
app.get('/api', (req, res) => {
  res.json({ message: "Hello from the WhatICrave backend!" });
});

// This line starts the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});