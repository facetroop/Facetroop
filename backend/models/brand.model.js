const mongoose = require('mongoose');

// Define schema
const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    logoOrPic: {
        type: String, // Assuming storing URL of the image
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    instaID: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
});

// Create model
const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
