// Importar los modulos necesarios
const Usuarios = require('../../db/db.modelo.usuarios');
const Perfiles = require('../../db/db.modelo.perfiles')
const Usuario_Calificaciones = require('../../db/db.modelo.usuario_calificaciones')
const Usuario_Solicitudes_Amistades = require('../../db/db.modelo.usuario_solicitudes_amistades')
const bcrypt = require('bcrypt');
const sequelize = require('../../db/db.conection');


// Exportar los modulos

let inspeccionarUsuario = async(usuario) => {                                    //Metodo de consulta para validar que los datos de acceso del usuario esten registrados en la base de datos 
    try {
        let existeUsuario = await Usuarios.findOne({where: {correo: `${usuario.correo}`}})
        // console.log(existeUsuario)
        if (existeUsuario != null){
            const validarcontrasena = await bcrypt.compare(usuario.contrasena, existeUsuario.contrasena);
            console.log(validarcontrasena)
            if (validarcontrasena){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el modelo')
    }
}

let consultaUsuarios = async() => {                                                //Metodo de consulta para enlistar todos los usuarios registrados en la base de datos
    try {
        let consulta = await Usuarios.findAll();
        return consulta;
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el modelo: Error en la consulta')
    }
}

let crearUsuario = async (usuario) => {                                             //Metodo de consulta para registrar un usuario por primera vez en la base de datos
    try {
        let existeUsuario = await Usuarios.findOne({where: {correo: `${usuario.correo}`}})
        if (existeUsuario == null) {
            let nuevoUsuario = await Usuarios.create({
                nombres: usuario.nombres,
                apellidos: usuario.apellidos,
                correo: usuario.correo,
                telefono: usuario.telefono,
                fecha_nacimiento: usuario.fecha_nacimiento,
                activo: usuario.activo,
                contrasena: usuario.contrasena,
                tipo_usuario: usuario.tipo_usuario
            });
            return nuevoUsuario;
        } else {
            throw new Error('Usuario ya registrado')
        }
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

let eliminarUsuario = async (idUsuario) => {                                          //Metodo de consulta para eliminar un usuario de forma permanente de la base de datos
    try {
        let borrarUsuario = await Usuarios.destroy({where: {id_usuario: `${idUsuario}`}})
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el modelo')
    }
}

let crearPerfil = async (perfil) => {                                          //Metodo de consulta para crear un perfil por primera vez de un usuario
    try {
        // let respuesta = await sequelize.query(`INSERT INTO Perfiles (id_usuario, foto_perfil, ciudad, pais, edad, estudios, idiomas, linkedin, hobbies) 
		//                                              VALUES	(${perfil.id_usuario},'${perfil.foto_perfil}', '${perfil.ciudad}', '${perfil.pais}', ${perfil.edad}, '${perfil.estudios}', '${perfil.idiomas}', '${perfil.linkedin}','${perfil.hobbies}')`)
        let respuesta = await Perfiles.create({
                                                id_usuario: perfil.id_usuario,
                                                nombre_perfil: perfil.nombre_perfil,
                                                foto_perfil: perfil.foto_perfil,
                                                ciudad: perfil.ciudad,
                                                pais: perfil.pais,
                                                edad: perfil.edad,
                                                estudios: perfil.estudios,
                                                idiomas: perfil.idiomas,
                                                linkedin: perfil.linkedin,
                                                hobbies: perfil.hobbies
                                            });
        return respuesta
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el modelo')
    }
}

let obtenerPerfil = async(id_usuario) => {                                                //Metodo de consulta para obtener el perfil de un usuario
    try {
        let consultaPerfil = await Perfiles.findOne({where: {id_usuario: `${id_usuario}`}});
        return consultaPerfil;
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el modelo: Error en la consulta')
    }
}

let actualizarPerfil = async (perfil) => {                                                 //Metodo de consulta para actualizar el perfil de un usuario 
    try {                
        let respuesta = await Perfiles.update({
                                                foto_perfil: perfil.foto_perfil,
                                                nombre_perfil: perfil.nombre_perfil,
                                                ciudad: perfil.ciudad,
                                                pais: perfil.pais,
                                                edad: perfil.edad,
                                                estudios: perfil.estudios,
                                                idiomas: perfil.idiomas,
                                                linkedin: perfil.linkedin,
                                                hobbies: perfil.hobbies
                                            },{
                                                where: {
                                                    id_usuario: perfil.id_usuario
                                                }
                                            });
        return respuesta
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el modelo')
    }
}


let crearCalificacion = async (usuario_calificacion) => {                                                 //Metodo de consulta para crear una calificacion por id_usuario de la caracterisitica con id_caracteristica
    try {                
        let respuesta = await Usuario_Calificaciones.create({
                                                id_usuario: usuario_calificacion.id_usuario ,
                                                id_caracteristica: usuario_calificacion.id_caracteristica,
                                                calificacion: usuario_calificacion.calificacion
                                            });
        return respuesta
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el modelo')
    }
}

let obtenerCalificaciones = async(id_usuario) => {                                                                                  //Metodo de consulta para obtener el perfil de un usuario
    try {
        let calificaciones = await Usuario_Calificaciones.findAll({  where: {id_usuario: `${id_usuario}`}  });
        return calificaciones;
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el modelo: Error en la consulta')
    }
}



let actualizarCalificacion = async (usuario_calificacion_actualizada) => {                                                 //Metodo de consulta para actualizar el perfil de un usuario 
    try {                
        let respuesta = await Usuario_Calificaciones.update({
                                                calificacion: usuario_calificacion_actualizada.calificacion
                                                
                                            },{
                                                where: {
                                                    id_usuario: usuario_calificacion_actualizada.id_usuario, 
                                                    id_caracteristica: usuario_calificacion_actualizada.id_caracteristica

                                                }
                                            });
        return respuesta
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el modelo')
    }
}

let crearSolicitudAmistad = async (solicitud_amistad) => {                                                 //Metodo de consulta para crear una calificacion por id_usuario de la caracterisitica con id_caracteristica
    try {                
        let respuesta = await Usuario_Solicitudes_Amistades.create({
                                                id_usuario: solicitud_amistad.id_usuario ,
                                                id_posible_amigo: solicitud_amistad.id_posible_amigo,
                                            });
        return respuesta
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el modelo')
    }
}

let obtenerSolicitudesAmistades = async(id_usuario) => {                                                                                  //Metodo de consulta para obtener el perfil de un usuario
    try {
        // Foo.findAll({
        //     include: [{
        //       model: Bar,
        //       through: {
        //         attributes: [/* list the wanted attributes here */]
        //       }
        //     }]
        //   });
        // let solicitudes_amistades = await Usuario_Solicitudes_Amistades.findAll({ 
        //                                                                     include:[{
        //                                                                         model: Perfiles, 
        //                                                                         through:{
        //                                                                             attributes:['nombre_perfil'],
        //                                                                         }
        //                                                                     }],   
        //                                                                      where: {id_usuario: `${id_usuario}`}   });
        let solicitudes_amistades = await sequelize.query(`SELECT Usuario_Solicitudes_Amistades.id_usuario, Usuario_Solicitudes_Amistades.id_posible_amigo, Perfiles.nombre_perfil, Perfiles.foto_perfil
                                                                FROM Usuario_Solicitudes_Amistades INNER JOIN Perfiles ON id_posible_amigo = Perfiles.id_usuario
                                                                WHERE Usuario_Solicitudes_Amistades.id_usuario =${id_usuario}`)
        return solicitudes_amistades;
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el modelo: Error en la consulta')
    }
}

let eliminarSolicitudAmistad = async (solicitud_amistad) => {                                                 
    try {   
        let respuesta = await Usuario_Solicitudes_Amistades.destroy({ where: {
                                                                                id_usuario: solicitud_amistad.id_usuario ,
                                                                                id_posible_amigo: solicitud_amistad.id_posible_amigo
                                                                             }         
                                                                    });
        return respuesta
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el modelo')
    }
}









module.exports = {inspeccionarUsuario, consultaUsuarios, crearUsuario, eliminarUsuario, crearPerfil, actualizarPerfil, obtenerPerfil, crearCalificacion, actualizarCalificacion, obtenerCalificaciones, crearSolicitudAmistad, eliminarSolicitudAmistad, obtenerSolicitudesAmistades}