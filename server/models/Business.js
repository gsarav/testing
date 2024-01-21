const mongoose = require('mongoose');

const BusinessSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: false
    },
    Description: {
        type: String,
        required: true
    },
    Tags: {
        type: Array,
        required: true
    },
    Link: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model("Business", BusinessSchema, "Businesses");