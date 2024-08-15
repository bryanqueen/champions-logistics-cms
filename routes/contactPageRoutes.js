const express = require('express');
const router = express.Router();
const contactPageController = require('../controllers/contactPageController');

// Route to create contact page content
router.post('/', contactPageController.createContactPageContent);

// Route to update contact page content
router.put('/', contactPageController.updateContactPageContent);

// Route to get contact page content
router.get('/', contactPageController.getContactPageContent);

module.exports = router;