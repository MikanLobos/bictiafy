const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ArtistaSchema = new Schema({
    nombre: String,
    descripcion: String,
    imagen: String
});

module.exports = mongoose.model('Artista', ArtistaSchema); //Se exportara & quedara en squema apartir de angula