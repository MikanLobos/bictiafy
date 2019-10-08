//modelo vista controlador:

//Aca se guardarUsuario(), login(), editarUsuario(), subirImagen(), obtenerImagen() 
//& bcript.comtrasena

const usuarioControl = {},
      Usuario = require( '../modelos/usuario' );       // Importa el Modelo de datos;

usuarioControl .guardarUsuario = async ( request, response ) => { 
    console .log( 'Enviado por el Cliente', request .body );      // Representa los datos que envia el 'cliente'

    const { 
        nombre,
        apellido,
        correo,
        contrasena,
        rol, 
        imagen     
    } = request .body; //recibiendo los datos de la respuesta de dicho cuerpo
        
        /** Crea Objeto con el Schema Note */
        usuarioNuevo = new Usuario({   //se crear una estructura de datos de tipo usuario (instancia)         
            nombre,
            apellido,
            correo,
            contrasena,
            rol, 
            imagen 
        }); //aca tambien se esta inyectando los valores a la instancia de usuarios

    console .log( 'Objeto Schema User', usuarioNuevo );

    /** Registra en la BD */
    await usuarioNuevo .save();              // ya esta en la espera de registrar en la base de datos. 

    response .json({ mensaje: 'Usuario guardado' });
} 

usuarioControl .editarUsuario = async ( request, response ) => {
    console .log( 'ID a editar', request .params .id );     // Recibe el parámetro ID de la URL
    const { 
        nombre,
        apellido,
        correo,
        contrasena,
        rol, 
        imagen  
    } = request .body;

    const usuario = await Usuario .findByIdAndUpdate( 
        request .params .id,        // este es el id del documento que se desea actualizar        
        {                           //Estructura con los campos que voy a editar
            nombre,
            apellido,
            correo,
            contrasena,
            rol, 
            imagen 
        });
    console .log( usuario );
    response .json({ mensaje: 'Usuario a sido actualizado' });
}

module .exports = usuarioControl;