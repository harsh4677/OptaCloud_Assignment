const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    houseNo: {
        type: String,
        required: true, 
    },
    road: {
        type: String,
        required: true, 
    },
    category: {
        type: String,
        required: true, 
    },
    location: {
        lat: {
            type: Number,
            required: true, 
        },
        lng: {
            type: Number,
            required: true, 
        },
    },
}, {
    timestamps: true, 
});

module.exports = mongoose.model('Address', addressSchema);
