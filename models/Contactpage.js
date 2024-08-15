const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const contactPageSchema = new Schema({
    header: {
        type: String
    },
    callUs: {
        phone1: String,
        phone2: String
    },
   chatUs: {
        mail: String,
        instagram: String,
        twitter: String
   },
    address: {
        type: String
    }
});
module.exports = Contactpage = model('Contactpage', contactPageSchema)