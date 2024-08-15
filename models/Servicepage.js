const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const servicePageSchema = new Schema({
    header: String,
    services: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
    }]
})
module.exports = Servicepage = model('Servicepage', servicePageSchema)