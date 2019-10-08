const mongoose = require('mongoose');
const app = require('./app')
const port = 4000;

mongoose.connect('mongodb://localhost:27017/bictiafy', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    })
    .then(()=> {
        console.log("Conexión exitosa");
        app.listen(port,()=>{
            console.log("Servidor corriendo.");
        });
    }, error =>{
        console.log(`El error es: ${error}`);
    })