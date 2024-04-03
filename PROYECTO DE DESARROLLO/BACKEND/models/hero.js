const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
    hero_id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    eye_color: {
        type: String, 
    },
    hair_color: {
        type: String, 
    },
    skin_color: {
        type: String, 
        default: null
    },
    height: Number,
    weight: Number,
    race: {
        type: String,  
    },
    publisher_id: Number,
    gender_id: Number,
    alignment_id: Number
     
});

module.exports = mongoose.model('Hero', heroSchema);
