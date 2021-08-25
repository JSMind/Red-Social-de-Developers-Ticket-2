// Importar los modulos necesarios
const Usuarios = require('../../db/db.modelo.usuarios');
const bcrypt = require('bcrypt');


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
module.exports = {inspeccionarUsuario, consultaUsuarios, crearUsuario, eliminarUsuario}