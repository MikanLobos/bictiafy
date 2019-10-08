const mongoose = require('mongoose');
const Schema = mongoose.Schema; //es un objecto de distancia el objecto esquema & se le pasa todas las propiedades de los datos de usuario

var UsuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    correo: String,
    contrasena: String,
    rol: String, 
    imagen: String
}); //esto viene siendo la estructura de datos, para soportar los datos en mongoo.

module.exports = mongoose.model('Usuario', UsuarioSchema); //se va a crear el nombre una coleccion en mongoDB llamada usuarios para registrarlos.