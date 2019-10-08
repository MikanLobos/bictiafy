const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var AlbumSchema = new Schema({
    titulo: String,
    descripcion: String,
    anio: Number,
    imagen: String,
    artista: { type: Schema.ObjectId, ref: 'Artista'} // se conecta por el id de artista & album; por primara con la llave foranea.
});

module.exports = mongoose.model('Album', AlbumSchema); 
//Se relaciona: con el titulo, con la descripcion, con el año & tener una artista unico & con una variable apuntarla es decir se agrega una anidacion, pero con una propiedad.