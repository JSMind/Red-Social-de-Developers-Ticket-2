// Importar los modulos necesarios
const controladorUsuarios = require('../controladores/controlador.usuarios');
const midd = require('../../middelwares/midd.usuarios')


// Construir y exportar los modulos
module.exports = async (app) => {

    // METODOS PARA OBTENER A LOS USUARIOS Y ELIMINAR PERMANENTEMENTE A UN USUARIO 
    app.post('/obtenerIdUsuario', async (req,res) => {                                          //Metodo para traer el id de un usuario mediante su correo
        try {
            const correo =  req.body
            console.log(correo)
            let consulta_Id_Usuario = await controladorUsuarios.obtenerIdusuario(usuario);
            res.status(200).json({message: 'Consulta exitosa', consulta_Id_Usuario});
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    app.delete('/usuarios/:idUsuario', async (req,res) => {                             //Metdo para eliminar permanentemente a un usario de la base de datos mediante el Id del Usuario
        let idUsuario = req.params.idUsuario;
        try {
            let eliminarUsuario = await controladorUsuarios.eliminarUsuario(idUsuario);
            res.status(200).json({message: 'El usuario se elimino correctamente'});
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    // METODOS PARA REGISTRARSE E INCIAR SESION
    app.post('/usuario/registro', midd.revisarRegistro, async(req,res) => {                                     //Metodo que permite registrarse el usuario
        let usuario = req.body
        try {
            let nuevoUsuario = await controladorUsuarios.crearUsuario(usuario)
            res.status(200).json({message: 'Registro de usuario exitoso', nuevoUsuario})
            
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: error.message});
        }
    })

    app.post('/usuario/login', midd.revisarLogin, async(req,res) => {                                          //Metodo que permite validar los datos de acceso del usuario y posteriormente generar un token
        let usuario = req.body
        try {
            let inspeccionarUsuario = await controladorUsuarios.inspeccionarUsuario(usuario);
            if (inspeccionarUsuario.existe){
                let validacion = await controladorUsuarios.generarToken(usuario)
                const id_usuario = inspeccionarUsuario.id_usuario               
                res.header('authorization', validacion).json({validacion, id_usuario})
            }else{
                res.status(200).json({message: 'Credenciales incorrectas'})
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    // METODOS PARA CREAR,OBTENER Y ACTUALIZAR EL PERFIL DEL USUARIO
    app.post('/usuario/crearPerfil', async(req,res) => {                                                //Metodo que para crear Perfil de un usuario
        let perfil = req.body
        try {
            let perfilcreado = await controladorUsuarios.crearPerfil(perfil) 
            res.status(200).json({message: 'Creacion del Perfil con exito', perfilcreado})  
        }catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    app.get('/usuarios/obtenerPerfil/:idusuario',midd.usuarioValido, async (req,res) => {                                          //Metodo para obtener un perfil de un usuario
        try {
            id_usuario = req.params.idusuario
            let consultaPerfil = await controladorUsuarios.obtenerPerfil(id_usuario);
            res.status(200).json({message: 'Consulta de Perfil exitosa', consultaPerfil});
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })


    app.post('/usuario/actualizarPerfil', async(req,res) => {                                                    //Metodo que para actualizar el Perfil de un usuario
        let perfil= req.body
        try {
            let perfilactualizado = await controladorUsuarios.actualizarPerfil(perfil) 
            res.status(200).json({message: 'Perfil actualizado con exito'})  
        }catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    //METODO PARA CREAR, OBTENER Y ACTUALIZAR CALIFICACION DE LAS CARACTERISTICAS DE LOS USUARIOS
    app.post('/usuario/crearCalificacion', async(req,res) => {                                                          //Metodo que para crear Calificacion de un Usuario
        let usuario_calificacion = req.body
        try {
            let respuesta = await controladorUsuarios.crearCalificacion(usuario_calificacion) 
            res.status(200).json({message: 'Calificacion creada con exito'})  
        }catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    app.get('/usuarios/obtenerCalificaciones/:idusuario',midd.usuarioValido, async (req,res) => {                                          //Metodo para obtener calificaciones por id_usuario
        try {
            id_usuario = req.params.idusuario
            let calificaciones = await controladorUsuarios.obtenerCalificaciones(id_usuario);
            res.status(200).json({message: 'Consulta de Calificaciones exitosa', calificaciones});
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    app.post('/usuario/actualizarCalificacion', async(req,res) => {                                                //Metodo que para actualizar calificacion de un Usuario
        let usuario_calificacion_actualizada = req.body
        try {
            let respuesta = await controladorUsuarios.actualizarCalificacion(usuario_calificacion_actualizada) 
            res.status(200).json({message: 'Calificacion actualizada con exito'})  
        }catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    //METODO PARA CREAR,OBTENER Y ELIMINAR UNA SOLICITUD DE AMISTAD
    
    app.post('/usuario/crearSolicitudAmistad', async(req,res) => {                                                          
        let solicitud_amistad = req.body
        try {
            let respuesta = await controladorUsuarios.crearSolicitudAmistad(solicitud_amistad) 
            res.status(200).json({message: 'Solicitud de amistad creada con exito'})  
        }catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    app.get('/usuarios/obtenerSolicitudAmistad/:id_usuario', async (req,res) => {                                          
        try {
            id_usuario = req.params.id_usuario
            console.log(id_usuario)
            let solicitudes_amistades = await controladorUsuarios.obtenerSolicitudesAmistades(id_usuario);
            res.status(200).json({message: 'Consulta de Solicitudes de Amistad exitosa', solicitudes_amistades});
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })


    app.post('/usuarios/eliminarSolicitudAmistad', async (req,res) => {                             
        let solicitud_amistad = req.body;
        try {
            console.log(solicitud_amistad)
            let eliminarSolicitudAmistad = await controladorUsuarios.eliminarSolicitudAmistad(solicitud_amistad);
            res.status(200).json({message: 'La solicitud de amistad se elimino correctamente'});
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    //METODOS PARA CREAR, OBTENER, ELIMINAR A UN AMIGO

    app.post('/usuario/crearAmigo', async(req,res) => {                                                          
        let ids_amigos = req.body
        try {
            let respuesta = await controladorUsuarios.crearAmigo(ids_amigos) 
            res.status(200).json({message: 'Amigo creado con exito'})  
        }catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    app.get('/usuario/obtenerAmigos/:id_usuario',midd.usuarioValido, async (req,res) => {                                          
        try {
            id_usuario = req.params.id_usuario
            
            let amigos = await controladorUsuarios.obtenerAmigos(id_usuario);
            res.status(200).json({message: 'Consulta de Amigos exitosa', amigos});
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    app.post('/usuarios/eliminarAmigo', async (req,res) => {                             
        let ids_amigos = req.body;
        try {
            let eliminarAmigo = await controladorUsuarios.eliminarAmigo(ids_amigos);
            res.status(200).json({message: 'Se ha eliminadado el amigo correctamente'});
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    //METODOS PARA CREAR, OBTENER, ELIMINAR UN COMENTARIO A UN USUARIO
    app.post('/usuario/crearComentario', async(req,res) => {                                                          
        let comentario = req.body
        try {
            let respuesta = await controladorUsuarios.crearComentario(comentario) 
            res.status(200).json({message: 'Comentario creado con exito'})  
        }catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    app.get('/usuario/obtenerComentarios/:id_usuario',midd.usuarioValido, async(req,res) => {                                                          
        let id_usuario = req.params.id_usuario
        try {
            let comentarios = await controladorUsuarios.obtenerComentarios(id_usuario) 
            res.status(200).json({message: 'Consulta de Comentarios exitosa', comentarios })  
        }catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    app.post('/usuario/actualizarComentario', async(req,res) => {                                                          
        let comentario = req.body
        try {
            let respuesta = await controladorUsuarios.actualizarComentario(comentario) 
            res.status(200).json({message: 'Comentario actualizado con exito'})  
        }catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })
    
}

