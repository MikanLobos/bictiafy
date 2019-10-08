//se esta encargando express 
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const usuarioRutas = require('./rutas/usuarioRutas');
// const artistaRutas = require('./rutas/artistaRutas');
// const albumRutas = require('./rutas/albumRutas');
// const cancionRutas = require('./rutas/cancionRutas');//importar unas rutas

app.use(bodyParser.json()); //estan utilizando el body para analizar todos los parametros de las rutas que estan arriba
app.use('/api', usuarioRutas); //en el localhosto:4000/app/ se estan guardando las rutas
// app.use('/api', artistaRutas);
// app.use('/api', albumRutas);
// app.use('/api', cancionRutas);

module.exports = app;