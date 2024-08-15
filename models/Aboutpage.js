const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const aboutPageSchema = new Schema({
    header: String,
    key1: {
        bannerImage: String,
        header: String,
        descriptionText: String
    },
    key2: {
        bannerImage: String,
        header: String,
        descriptionText: String
    },
    key3: {
        header: String,
        content: [{
            type: String
        }]
    },
    key4: {
        mission: String,
        vision: String,
        strength: String
    }
});
module.exports = Aboutpage = model('Aboutpage', aboutPageSchema);