const express = require('express');
const router = express.Router();
const servicePageController = require('../controllers/servicePageController');

// Route to create service page content
router.post('/', servicePageController.createServicePageContent);

// Route to update service page content
router.put('/', servicePageController.updateServicePageContent);

// Route to get service page content
router.get('/', servicePageController.getServicePageContent);

// Route to create a new service
router.post('/service', servicePageController.createService);

// Route to update a service
router.put('/service/:id', servicePageController.updateService);

// Route to get all services
router.get('/services', servicePageController.getAllServices);

//Route to get a single Service
router.get('/services/:id', servicePageController.getASingleService);

module.exports = router;