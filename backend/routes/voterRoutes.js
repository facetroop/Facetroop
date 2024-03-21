const express = require('express');
const router = express.Router();
const { saveUser } = require('../controllers/userController');
const { updateUser } = require('../controllers/userController');

// Route to save new user data
router.post('/users', saveUser);

// Route to update existing user data
router.put('/users/:id', updateUser);

module.exports = router;
