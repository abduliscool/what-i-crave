const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); 
const User = require('../models/User'); // Import the User model

// @route   POST api/users/register
// @desc    Register a new user
router.post('/register', async (req, res) => {
  console.log('Register endpoint hit!');
  try {
    // Get the name, email, and password from the request body
    const { name, email, password } = req.body;
    console.log('Data received:', { name, email });

    // Check if a user with that email already exists
    console.log('Checking if user exists...'); 
    let user = await User.findOne({ email });
    if (user) {
      console.log('User found.');
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create a new user instance based on the User model
    user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    
    // Save the new user to the database
    console.log('Saving user to database...'); 
    await user.save();
    console.log('User saved successfully!'); 

    res.status(201).json({ msg: 'User registered successfully' });

  } catch (err) {
    console.error('Error in registration:', err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;