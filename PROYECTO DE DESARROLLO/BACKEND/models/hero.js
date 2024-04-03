/*const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
    name: String,
    publisher: String,
    race: String,
    gender: String,
    height: Number,
    weight: Number
    // Agrega más campos según sea necesario
});

module.exports = mongoose.model('Hero', heroSchema);
*/

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
        type: String, // Cambié 'mixed' a 'String', ajusta según sea necesario
    },
    hair_color: {
        type: String, // Cambié 'mixed' a 'String', ajusta según sea necesario
    },
    skin_color: {
        type: String, // Ajusta según sea necesario; 'null' como tipo no es válido en Mongoose
        default: null
    },
    height: Number,
    weight: Number,
    race: {
        type: String, // Cambié 'mixed' a 'String', ajusta según sea necesario
    },
    publisher_id: Number,
    gender_id: Number,
    alignment_id: Number
    // Agrega más campos según sea necesario
});

module.exports = mongoose.model('Hero', heroSchema);
