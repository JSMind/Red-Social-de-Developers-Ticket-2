// Importar los modulos a utilizar
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const modeloUsuarios = require('../modelos/modelo.usuarios');

// Exportar los modulos
let listarUsuarios = async () => {                                      //Controlador que conecta con el metodo consultaUSuarios para listar todos los usuarios
    try {
        let consultaUsuarios = await modeloUsuarios.consultaUsuarios();
        return consultaUsuarios;
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el controlador');
    }
}

let crearUsuario = async (usuario) => {                                  //Controlador que conecta con el metodo crearUsuarios para la creacion de un Usuario
    try {
        const saltos = await bcrypt.genSalt(15)                          //Se encripta la contraseña del usuario para darle mayor seguridad con la libreria bcrypt
        const contrasena = await bcrypt.hash(usuario.contrasena, saltos)
        usuario.contrasena = contrasena                                  
        
        let nuevoUsuario = await modeloUsuarios.crearUsuario(usuario)
        return nuevoUsuario;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

let eliminarUsuario = async (idUsuario) => {                            //Controldor que conecta con el metodo eliminarUsuario para la eliminacion de un Usuario 
    try {
        let borrarUsuario = await modeloUsuarios.eliminarUsuario(idUsuario);
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el controlador');
    }
}

let inspeccionarUsuario = async(usuario) =>{                           // Controlador que conecta con el metodo insepeccionarUsuario para realizar la validacion de los datos de acceso
    try {
        let usuarioValido = await modeloUsuarios.inspeccionarUsuario(usuario);
        if (usuarioValido){
            return usuarioValido;
        }else{
            
            return false
        }
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el controlador');
    }
}

let generarToken = async(usuario) => {                              //Controlador que genera el token
    try {
        const token = jwt.sign({usuario}, process.env.SECRET_KEY);  //Tiempo máximo de validez de 15 min
        return token;
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el controlador');
    }
}

let verificarUsuario = async(token) =>{                             //Controlador que verifica el token con la Secret Key 
    try {
        const validacion = jwt.verify(token, process.env.SECRET_KEY);
        if(validacion){
            return validacion;
        }else{
            throw new Error('Token no valido')
        }

    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el controlador');
    }
}

let crearPerfil = async (perfil) => {                                  //Controlador que conecta con el metodo crearUsuarios para la creacion de un Usuario
    try {
        let nuevoPerfil = await modeloUsuarios.crearPerfil(perfil)
        return nuevoPerfil;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

let obtenerPerfil = async (id_usuario) => {                                  //Controlador que conecta con el metodo crearUsuarios para la creacion de un Usuario
    try {
        let consultaPerfil = await modeloUsuarios.obtenerPerfil(id_usuario)
        return consultaPerfil;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

let actualizarPerfil = async (perfil) => {                                  //Controlador que conecta con el metodo crearUsuarios para la creacion de un Usuario
    try {
    let perfilactualizado = await modeloUsuarios.actualizarPerfil(perfil)
        return perfilactualizado;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}


let crearCalificacion = async (usuario_calificacion) => {                                  //Controlador 
    try {
    let perfilactualizado = await modeloUsuarios.crearCalificacion(usuario_calificacion)
        return perfilactualizado;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}


let obtenerCalificaciones = async (id_usuario) => {                                  //Controlador que conecta con el metodo crearUsuarios para la creacion de un Usuario
    try {
        let calificaciones = await modeloUsuarios.obtenerCalificaciones(id_usuario)
        return calificaciones;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

let actualizarCalificacion = async (usuario_calificacion_actualizada) => {                                  //Controlador 
    try {
    let respuesta = await modeloUsuarios.actualizarCalificacion(usuario_calificacion_actualizada)
        return respuesta;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

let crearSolicitudAmistad = async (solicitud_amistad) => {                                  //Controlador 
    try {
    let respuesta = await modeloUsuarios.crearSolicitudAmistad(solicitud_amistad)
        return respuesta;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

let obtenerSolicitudesAmistades = async (id_usuario) => {                                  //Controlador 
    try {
    let solicitudes_amistades = await modeloUsuarios.obtenerSolicitudesAmistades(id_usuario)
        return solicitudes_amistades;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

let eliminarSolicitudAmistad = async (solicitud_amistad) => {                                  //Controlador 
    try {
    let respuesta = await modeloUsuarios.eliminarSolicitudAmistad(solicitud_amistad)
        return respuesta;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}




module.exports = { listarUsuarios, crearUsuario, eliminarUsuario, inspeccionarUsuario, generarToken, verificarUsuario, crearPerfil, obtenerPerfil, actualizarPerfil, crearCalificacion, actualizarCalificacion, obtenerCalificaciones, crearSolicitudAmistad, eliminarSolicitudAmistad, obtenerSolicitudesAmistades }