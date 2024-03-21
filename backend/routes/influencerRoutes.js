const express = require('express');
const router = express.Router();
const { saveInfluencer , updateInfluencer  } =  require("../Controllers/InfluencerController")

// Route to save new user data
router.post('/brand', saveInfluencer);

// Route to update existing user data
router.put('/brand/:id', updateInfluencer);

module.exports = router;
