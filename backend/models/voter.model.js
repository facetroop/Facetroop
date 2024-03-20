const mongoose = require('mongoose');

// Define schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profilePicture: {
        type: String, // Assuming storing URL of the image
        required: true
    },
    instaAccount: {
        type: String,
        required: false // Optional
    }
});

// Create model
const User = mongoose.model('User', userSchema);

module.exports = User;
