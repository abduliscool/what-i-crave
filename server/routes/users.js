const express = require('express');
const router = express.Router();

// @route   POST api/user/register
// @desc    Register a new user
// @access  Public
router.post('/register', (req, res) => {
    console.log(req.body);
    res.send('User registration route is working!');
});

module.exports = router