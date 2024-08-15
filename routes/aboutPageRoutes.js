const express = require('express');
const router = express.Router();
const aboutPageController = require('../controllers/aboutPageController');

// Route to create about page content
router.post('/', aboutPageController.createAboutPageContent);

// Route to update about page content
router.put('/', aboutPageController.updateAboutPageContent);

// Route to get about page content
router.get('/', aboutPageController.getAboutPageContent);

module.exports = router