const Influencer = require('../models/Influencer');

// Controller function to save new influencer data
const saveInfluencer = async (req, res) => {
    try {
        // Create a new instance of Influencer model with data from request body
        const newInfluencer = new Influencer(req.body);
        // Save the new influencer to the database
        await newInfluencer.save();
        // Return success response
        return res.status(201).json({ message: 'Influencer saved successfully', data: newInfluencer });
    } catch (error) {
        // Return error response if there's any error
        return res.status(500).json({ message: 'Failed to save influencer', error: error.message });
    }
};

const updateInfluencer = async (req, res) => {
    try {
        // Extract influencer ID from request parameters
        const influencerId = req.params.id;
        // Find the influencer by ID
        const influencer = await Influencer.findById(influencerId);
        if (!influencer) {
            return res.status(404).json({ message: 'Influencer not found' });
        }
        // Update influencer data with data from request body
        Object.assign(influencer, req.body);
        // Save the updated influencer to the database
        await influencer.save();
        // Return success response
        return res.json({ message: 'Influencer updated successfully', data: influencer });
    } catch (error) {
        // Return error response if there's any error
        return res.status(500).json({ message: 'Failed to update influencer', error: error.message });
    }
};

module.exports = {
    saveInfluencer , updateInfluencer
};
