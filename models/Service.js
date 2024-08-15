const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const serviceSchema = new Schema({
    bannerImage: String,
    header: String,
    descriptionText: String,
    keys: [{
        title: String,
        contents: [{
            type: String
        }]
    }]
});
module.exports = Service = model('Service', serviceSchema)