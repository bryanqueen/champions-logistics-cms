const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const homePageSchema = new Schema({
    header1: {
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
    aboutImageText: [{
        image: String,
        content: String
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
    serviceImageText: [{
        image: String,
        pointOne: String,
        pointTwo: String
    }],
    faqs: [{
       content: String,
       subContent: String
    }],

});
module.exports = Homepage = model('Homepage', homePageSchema);