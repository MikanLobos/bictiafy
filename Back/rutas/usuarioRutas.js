const { Router } = require( 'express' ),
      { guardarUsuario, editarUsuario } = require ( '../controladores/usuarioControl' ),
      router = Router();      

// Escucha la ruta
router .route( '/guardar-usuario' )
    .post( guardarUsuario );     // Crea o envia una entidad a un recurso en específico 
    
router .route('/editar-usuario/:id')   // Parametrizacion :id
    .put( editarUsuario );      // Reemplaza el recurso específico de destino

module .exports = router;