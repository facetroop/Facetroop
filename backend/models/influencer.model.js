const mongoose = require('mongoose');

// Define schema
const influencerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    instaID: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'couple', 'other'],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: [String],
        required: true,
        validate: {
            validator: function (categories) {
                return categories.length <= 5;
            },
            message: 'You can select upto 5 categories.'
        }
    },
    profilePicture: {
        type: String, // Assuming storing URL of the image
        required: true
    }
});

// Create model
const Influencer = mongoose.model('Influencer', influencerSchema);

module.exports = Influencer;
