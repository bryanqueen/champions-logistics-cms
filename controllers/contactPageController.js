const Contactpage = require('../models/Contactpage');

const contactPageController = {
        // Create Contact Page Content
        createContactPageContent: async (req, res) => {
          try {
            const {
              header,
              callUs,
              chatUs,
              address,
            } = req.body;
      
            // Create a new contact page content document
            const contactPageContent = new Contactpage({
              header,
              callUs: {
                phone1: callUs.phone1,
                phone2: callUs.phone2,
              },
              chatUs: {
                mail: chatUs.mail,
                instagram: chatUs.instagram,
                twitter: chatUs.twitter,
              },
              address,
            });
      
            await contactPageContent.save();
      
            res.json({ message: 'Contact Page Content created successfully', contactPageContent });
          } catch (error) {
            console.error('Error creating contact page content:', error);
            return res.status(500).json({ error: error.message });
          }
        },
      
        // Update Contact Page Content
        updateContactPageContent: async (req, res) => {
          try {
            const {
              header,
              callUs,
              chatUs,
              address,
            } = req.body;
      
            // Update the single ContactPage document
            const updatedContactPageContent = await Contactpage.findOneAndUpdate(
              {}, // Empty query to find the first document
              {
                header,
                callUs: {
                  phone1: callUs.phone1,
                  phone2: callUs.phone2,
                },
                chatUs: {
                  mail: chatUs.mail,
                  instagram: chatUs.instagram,
                  twitter: chatUs.twitter,
                },
                address,
              },
              { new: true } // Return the updated document
            );
      
            if (!updatedContactPageContent) {
              return res.status(404).json({ error: 'Contact Page Content not found' });
            }
      
            res.json({ message: 'Contact Page Content updated successfully', updatedContactPageContent });
          } catch (error) {
            console.error('Error updating contact page content:', error);
            return res.status(500).json({ error: error.message });
          }
        },
      
        // Get Contact Page Content
        getContactPageContent: async (req, res) => {
          try {
            const contactPageContent = await Contactpage.findOne();
      
            if (!contactPageContent) {
              return res.status(404).json({ error: 'Contact Page Content not found' });
            }
      
            res.json(contactPageContent);
          } catch (error) {
            console.error('Error retrieving contact page content:', error);
            return res.status(500).json({ error: error.message });
          }
        }
}
module.exports = contactPageController;