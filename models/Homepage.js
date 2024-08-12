const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const homePageSchema = new Schema({
    header1: {
        type: String
    },
    subHeader1: {
        type: String
    },
    descriptionText1: {
        type: String
    },
    bannerImage: {
        type: String
    },
    header2: {
        type: String
    },
    subHeader2: {
        type: String
    },
    descriptionText2: {
        type: String
    },
    imageOneForAbout: {
        type: String
    },
    imageTwoForAbout: {
        type: String
    },
    imageThreeForAbout: {
        type: String
    },
    imageFourForAbout: {
        type: String
    },
    imageFiveForAbout: {
        type: String
    },
    subContentsForAbout: [{
        type: String
    }],
    header3: {
        type: String
    },
    subHeader3: {
        type: String
    },
    descriptionText3: {
        type: String
    },
    imageOneForServices: {
        type: String
    },
    imageTwoForServices: {
        type: String
    },
    imageThreeForServices: {
        type: String
    },
    keyPointsForImageOneInServicesSection: [{
        type: String
    }],
    keyPointsForImageTwoInServicesSection: [{
        type: String
    }],
    keyPointsForImageThreeInServicesSection: [{
        type: String
    }],
    faqsQuestions: [{
        type: String
    }],
    faqsAnswers: [{
        type: String
    }]
});
module.exports = Homepage = model('Homepage', homePageSchema);