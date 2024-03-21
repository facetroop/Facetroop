const User = require('../models/User');

// Controller function to save new user data
const saveUser = async (req, res) => {
    try {
        // Create a new instance of User model with data from request body
        const newUser = new User(req.body);
        // Save the new user to the database
        await newUser.save();
        // Return success response
        return res.status(201).json({ message: 'User saved successfully', data: newUser });
    } catch (error) {
        // Return error response if there's any error
        return res.status(500).json({ message: 'Failed to save user', error: error.message });
    }
};


const updateUser = async (req, res) => {
    try {
        // Extract user ID from request parameters
        const userId = req.params.id;
        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Update user data with data from request body
        Object.assign(user, req.body);
        // Save the updated user to the database
        await user.save();
        // Return success response
        return res.json({ message: 'User updated successfully', data: user });
    } catch (error) {
        // Return error response if there's any error
        return res.status(500).json({ message: 'Failed to update user', error: error.message });
    }
};

module.exports = {
    saveUser
};
