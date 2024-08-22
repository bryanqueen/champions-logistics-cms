
const Servicepage = require('../models/Servicepage');
const Service = require('../models/Service');

const servicePageController = {
  // Create Service Page Content
  createServicePageContent: async (req, res) => {
    try {
      const { header } = req.body;

      // Fetch all services from the database
      const services = await Service.find();

      // Create a new service page content document
      const servicePageContent = new Servicepage({
        header,
        services: services.map(service => service._id), // Store only the IDs of the services
      });

      await servicePageContent.save();

      res.json({ message: 'Service Page Content created successfully', servicePageContent });
    } catch (error) {
      console.error('Error creating service page content:', error);
      return res.status(500).json({ error: error.message });
    }
  },

  // Update Service Page Content
  updateServicePageContent: async (req, res) => {
    try {
      const { header } = req.body;

      // Fetch all services from the database
      const services = await Service.find();

      // Update the single ServicePage document
      const updatedServicePageContent = await Servicepage.findOneAndUpdate(
        {}, // Empty query to find the first document
        {
          header,
          services: services.map(service => service._id), // Store only the IDs of the services
        },
        { new: true } // Return the updated document
      );

      if (!updatedServicePageContent) {
        return res.status(404).json({ error: 'Service Page Content not found' });
      }

      res.json({ message: 'Service Page Content updated successfully', updatedServicePageContent });
    } catch (error) {
      console.error('Error updating service page content:', error);
      return res.status(500).json({ error: error.message });
    }
  },

  // Get Service Page Content
  getServicePageContent: async (req, res) => {
    try {
      const servicePageContent = await Servicepage.findOne().populate('services','bannerImage header descriptionText');

      if (!servicePageContent) {
        return res.status(404).json({ error: 'Service Page Content not found' });
      }

      res.json(servicePageContent);
    } catch (error) {
      console.error('Error retrieving service page content:', error);
      return res.status(500).json({ error: error.message });
    }
  },

  // Create a new Service
  createService: async (req, res) => {
    try {
      const { bannerImage, header, descriptionText, keys } = req.body;

      const newService = new Service({
        bannerImage,
        header,
        descriptionText,
        keys: Array.isArray(keys) ? keys : [keys], // Ensure keys is an array
      });

      await newService.save();


 // Update the ServicePage document, or create a new one if it doesn't exist
 const updatedServicePage = await Servicepage.findOneAndUpdate(
  {}, // Empty filter to find any document
  {
    $push: { services: newService._id }, // Add the new service ID to the services array
  },
  {
    new: true, // Return the updated document
    upsert: true // Create a new document if one doesn't exist
  }
)

      res.json({ newService, updatedServicePage });
    } catch (error) {
      console.error('Error creating service:', error);
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a Service
  updateService: async (req, res) => {
    try {
      const serviceId = req.params.id; // Get the service ID from the request parameters
      const { bannerImage, header, descriptionText, keys } = req.body;

      const updatedService = await Service.findByIdAndUpdate(
        serviceId,
        {
          bannerImage,
          header,
          descriptionText,
          keys: Array.isArray(keys) ? keys : [keys], // Ensure keys is an array
        },
        { new: true } // Return the updated document
      );

      if (!updatedService) {
        return res.status(404).json({ error: 'Service not found' });
      }

      res.json({ message: 'Service updated successfully', updatedService });
    } catch (error) {
      console.error('Error updating service:', error);
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all Services
  getAllServices: async (req, res) => {
    try {
      const services = await Service.find();
      res.json(services);
    } catch (error) {
      console.error('Error retrieving services:', error);
      return res.status(500).json({ error: error.message });
    }
  },
  getASingleService: async (req, res) => {
    try {
        const serviceId = req.params.id;

        const service = await Service.findById(serviceId);

        if(!service){
            return res.status(404).json({error: 'Service not found'})
        }
        
        res.json(service)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
  }
};

module.exports = servicePageController;