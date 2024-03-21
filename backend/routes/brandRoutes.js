const express = require('express');
const router = express.Router();
const { saveBrand , updateBrand  } =  require("../Controllers/BrandController.js")

// Route to save new user data
router.post('/brand', saveBrand);

// Route to update existing user data
router.put('/brand/:id', updateBrand);

module.exports = router;
