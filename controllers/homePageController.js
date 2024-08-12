
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
            imageOneForAbout,
            imageTwoForAbout,
            imageThreeForAbout,
            imageFourForAbout,
            imageFiveForAbout,
            subContentsForAbout,
            header3,
            subHeader3,
            descriptionText3,
            imageOneForServices,
            imageTwoForServices,
            imageThreeForServices,
            keyPointsForImageOneInServicesSection,
            keyPointsForImageTwoInServicesSection,
            keyPointsForImageThreeInServicesSection,
            faqsQuestions,
            faqsAnswers,
          } = req.body;
    

    
          const homePageContent = new Homepage({
            header1,
            descriptionText1,
            bannerImage,
            header2,
            subHeader2,
            descriptionText2,
            imageOneForAbout,
            imageTwoForAbout,
            imageThreeForAbout,
            imageFourForAbout,
            imageFiveForAbout,
            subContentsForAbout: Array.isArray(subContentsForAbout) ? subContentsForAbout : [subContentsForAbout],
            header3,
            subHeader3,
            descriptionText3,
            imageOneForServices,
            imageTwoForServices,
            imageThreeForServices,
            keyPointsForImageOneInServicesSection: Array.isArray(keyPointsForImageOneInServicesSection) ? keyPointsForImageOneInServicesSection : [keyPointsForImageOneInServicesSection],
            keyPointsForImageTwoInServicesSection: Array.isArray(keyPointsForImageTwoInServicesSection) ? keyPointsForImageTwoInServicesSection : [keyPointsForImageTwoInServicesSection],
            keyPointsForImageThreeInServicesSection: Array.isArray(keyPointsForImageThreeInServicesSection) ? keyPointsForImageThreeInServicesSection : [keyPointsForImageThreeInServicesSection],
            faqsQuestions: Array.isArray(faqsQuestions) ? faqsQuestions : [faqsQuestions],
            faqsAnswers: Array.isArray(faqsAnswers) ? faqsAnswers : [faqsAnswers],
          });
    
          await homePageContent.save();
          res.json({ message: 'Home Page Content created successfully', homePageContent });
        } catch (error) {
          console.error('Error creating home page content:', error);
          return res.status(500).json({ error: error.message });
        }
      },

        // Update Home Page Content
  updateHomePageContent: async (req, res) => {
    try {
      const {
        header1,
        subHeader1,
        descriptionText1,
        bannerImage,
        header2,
        subHeader2,
        descriptionText2,
        imageOneForAbout,
        imageTwoForAbout,
        imageThreeForAbout,
        imageFourForAbout,
        imageFiveForAbout,
        subContentsForAbout,
        header3,
        subHeader3,
        descriptionText3,
        imageOneForServices,
        imageTwoForServices,
        imageThreeForServices,
        keyPointsForImageOneInServicesSection,
        keyPointsForImageTwoInServicesSection,
        keyPointsForImageThreeInServicesSection,
        faqsQuestions,
        faqsAnswers,
      } = req.body;

      // Update the single Homepage document
      const updatedHomePageContent = await Homepage.findOneAndUpdate(
        {}, // Empty query to find the first document
        {
          header1,
          subHeader1,
          descriptionText1,
          bannerImage,
          header2,
          subHeader2,
          descriptionText2,
          imageOneForAbout,
          imageTwoForAbout,
          imageThreeForAbout,
          imageFourForAbout,
          imageFiveForAbout,
          subContentsForAbout: Array.isArray(subContentsForAbout) ? subContentsForAbout : [subContentsForAbout],
          header3,
          subHeader3,
          descriptionText3,
          imageOneForServices,
          imageTwoForServices,
          imageThreeForServices,
          keyPointsForImageOneInServicesSection: Array.isArray(keyPointsForImageOneInServicesSection) ? keyPointsForImageOneInServicesSection : [keyPointsForImageOneInServicesSection],
          keyPointsForImageTwoInServicesSection: Array.isArray(keyPointsForImageTwoInServicesSection) ? keyPointsForImageTwoInServicesSection : [keyPointsForImageTwoInServicesSection],
          keyPointsForImageThreeInServicesSection: Array.isArray(keyPointsForImageThreeInServicesSection) ? keyPointsForImageThreeInServicesSection : [keyPointsForImageThreeInServicesSection],
          faqsQuestions: Array.isArray(faqsQuestions) ? faqsQuestions : [faqsQuestions],
          faqsAnswers: Array.isArray(faqsAnswers) ? faqsAnswers : [faqsAnswers],
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

  // Get Home Page Content
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
  }
}
module.exports = homePageController;