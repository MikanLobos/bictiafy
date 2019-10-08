const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CancionSchema = new Schema({
    numero: String,
    tituloCancion: String,
    duracion: String,
    urlCancion: String,
    album: { type: Schema.ObjectId, ref: 'Album'} //referencia de modelo album-artista
});

module.exports = mongoose.model('Cancion', CancionSchema);