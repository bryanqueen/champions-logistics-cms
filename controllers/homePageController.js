const mongoose = require('mongoose');
const Homepage = require('../models/Homepage');

const homePageController = {
  createHomePageContent: async (req, res) => {
    try {
      const {
        header1,
        descriptionText1,
        bannerImage,
        header2,
        subHeader2,
        descriptionText2,
        aboutImageText, // Array of objects for about images and text
        header3,
        subHeader3,
        descriptionText3,
        serviceImageText, // Array of objects for service images and points
        faqs, // Array of FAQ objects
      } = req.body;

      // Create a new homepage content document
      const homePageContent = new Homepage({
        header1,
        descriptionText1,
        bannerImage,
        header2,
        subHeader2,
        descriptionText2,
        aboutImageText: Array.isArray(aboutImageText) ? aboutImageText : [aboutImageText],
        header3,
        subHeader3,
        descriptionText3,
        serviceImageText: Array.isArray(serviceImageText) ? serviceImageText : [serviceImageText],
        faqs: Array.isArray(faqs) ? faqs : [faqs],
      });

      await homePageContent.save();

      res.json({ message: 'Home Page Content created successfully', homePageContent });
    } catch (error) {
      console.error('Error creating home page content:', error);
      return res.status(500).json({ error: error.message });
    }
  },

  updateHomePageContent: async (req, res) => {
    try {
      const {
        header1,
        descriptionText1,
        bannerImage,
        header2,
        subHeader2,
        descriptionText2,
        aboutImageText,
        header3,
        subHeader3,
        descriptionText3,
        serviceImageText,
        faqs,
      } = req.body;

      // Update the single Homepage document
      const updatedHomePageContent = await Homepage.findOneAndUpdate(
        {}, // Empty query to find the first document
        {
          header1,
          descriptionText1,
          bannerImage,
          header2,
          subHeader2,
          descriptionText2,
          aboutImageText: Array.isArray(aboutImageText) ? aboutImageText : [aboutImageText],
          header3,
          subHeader3,
          descriptionText3,
          serviceImageText: Array.isArray(serviceImageText) ? serviceImageText : [serviceImageText],
          faqs: Array.isArray(faqs) ? faqs : [faqs],
        },
        { new: true } // Return the updated document
      );

      if (!updatedHomePageContent) {
        return res.status(404).json({ error: 'Home Page Content not found' });
      }

      res.json({ message: 'Home Page Content updated successfully', updatedHomePageContent });
    } catch (error) {
      console.error('Error updating home page content:', error);
      return res.status(500).json({ error: error.message });
    }
  },

  getHomePageContent: async (req, res) => {
    try {
      const homePageContent = await Homepage.findOne();

      if (!homePageContent) {
        return res.status(404).json({ error: 'Home Page Content not found' });
      }

      res.json(homePageContent);
    } catch (error) {
      console.error('Error retrieving home page content:', error);
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = homePageController;
