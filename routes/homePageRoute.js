const express = require('express');
const router = express.Router();
const homePageController = require('../controllers/homePageController');


// Routes
router.post('/', homePageController.createHomePageContent);
router.get('/', homePageController.getHomePageContent);
router.put('/', homePageController.updateHomePageContent)

module.exports = router;
