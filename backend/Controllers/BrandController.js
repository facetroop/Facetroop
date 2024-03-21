const Brand = require('../models/Brand');

// Controller function to save new brand data
const saveBrand = async (req, res) => {
    try {
        // Create a new instance of Brand model with data from request body
        const newBrand = new Brand(req.body);
        // Save the new brand to the database
        await newBrand.save();
        // Return success response
        return res.status(201).json({ message: 'Brand saved successfully', data: newBrand });
    } catch (error) {
        // Return error response if there's any error
        return res.status(500).json({ message: 'Failed to save brand', error: error.message });
    }
};


const updateBrand = async (req, res) => {
    try {
        // Extract brand ID from request parameters
        const brandId = req.params.id;
        // Find the brand by ID
        const brand = await Brand.findById(brandId);
        if (!brand) {
            return res.status(404).json({ message: 'Brand not found' });
        }
        // Update brand data with data from request body
        Object.assign(brand, req.body);
        // Save the updated brand to the database
        await brand.save();
        // Return success response
        return res.json({ message: 'Brand updated successfully', data: brand });
    } catch (error) {
        // Return error response if there's any error
        return res.status(500).json({ message: 'Failed to update brand', error: error.message });
    }
};

module.exports = {
    saveBrand , updateBrand
};
