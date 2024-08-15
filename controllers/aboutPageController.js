
const Aboutpage = require('../models/Aboutpage');

const aboutPageController = {
  // Create About Page Content
  createAboutPageContent: async (req, res) => {
    try {
      const {
        header,
        key1,
        key2,
        key3,
        key4,
      } = req.body;

      // Create a new about page content document
      const aboutPageContent = new Aboutpage({
        header,
        key1: {
          bannerImage: key1.bannerImage,
          header: key1.header,
          descriptionText: key1.descriptionText,
        },
        key2: {
          bannerImage: key2.bannerImage,
          header: key2.header,
          descriptionText: key2.descriptionText,
        },
        key3: {
          header: key3.header,
          content: Array.isArray(key3.content) ? key3.content : [key3.content],
        },
        key4: {
          mission: key4.mission,
          vision: key4.vision,
          strength: key4.strength,
        },
      });

      await aboutPageContent.save();

      res.json({ message: 'About Page Content created successfully', aboutPageContent });
    } catch (error) {
      console.error('Error creating about page content:', error);
      return res.status(500).json({ error: error.message });
    }
  },

  // Update About Page Content
  updateAboutPageContent: async (req, res) => {
    try {
      const {
        header,
        key1,
        key2,
        key3,
        key4,
      } = req.body;

      // Update the single AboutPage document
      const updatedAboutPageContent = await Aboutpage.findOneAndUpdate(
        {}, // Empty query to find the first document
        {
          header,
          key1: {
            bannerImage: key1.bannerImage,
            header: key1.header,
            descriptionText: key1.descriptionText,
          },
          key2: {
            bannerImage: key2.bannerImage,
            header: key2.header,
            descriptionText: key2.descriptionText,
          },
          key3: {
            header: key3.header,
            content: Array.isArray(key3.content) ? key3.content : [key3.content],
          },
          key4: {
            mission: key4.mission,
            vision: key4.vision,
            strength: key4.strength,
          },
        },
        { new: true } // Return the updated document
      );

      if (!updatedAboutPageContent) {
        return res.status(404).json({ error: 'About Page Content not found' });
      }

      res.json({ message: 'About Page Content updated successfully', updatedAboutPageContent });
    } catch (error) {
      console.error('Error updating about page content:', error);
      return res.status(500).json({ error: error.message });
    }
  },

  // Get About Page Content
  getAboutPageContent: async (req, res) => {
    try {
      const aboutPageContent = await Aboutpage.findOne();

      if (!aboutPageContent) {
        return res.status(404).json({ error: 'About Page Content not found' });
      }

      res.json(aboutPageContent);
    } catch (error) {
      console.error('Error retrieving about page content:', error);
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = aboutPageController;