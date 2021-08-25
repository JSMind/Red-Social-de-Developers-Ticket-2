//Importar los modulos requeridos
const rateLimit = require('express-rate-limit')
const Joi = require('joi')
const controladorUsuarios= require('../app/controladores/controlador.usuarios')
const {modeloLogin, modeloRegistro }= require('./midd.modelo.usuarios')



//Middleware para limitar las consultas por usuario
const limiteConsultas = rateLimit({
    windowMs: 2*60*1000,
    max: 100,
    message: 'Exedio la cantidad maxima de consultas'
})

//Middleware para validaciones de acceso
let usuarioValido = async (req,res,next) =>{                                    //Metodo para la validacion del usuario mediante el token
    try {
        if (req.header('authorization')){
            console.log("Estas en usuarioValido")
            const token = req.header('authorization').split(' ')[1]
            console.log(token)
            let verificado = await controladorUsuarios.verificarUsuario(token);
            req.params.usuario = verificado;
            return next();
        } else {
            throw new Error ('Este es un sistema seguro y requiere autorización');
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: 'Ocurrio un error al validar el usuario', error: error.message});
    }
}

let revisarLogin = async (req,res,next) =>{             //Metodo para validar correo y contrasena para inicio de sesion
    try{
        await Joi.attempt(req.body, modeloLogin, 'Alguno de los datos no es correcto')
        next()
    }catch (error){
        throw new Error(error);
    }
}

let revisarRegistro = async  (req,res,next) =>{          //Metodo para validar los datos de Registro del Usuario
    try{
        await Joi.attempt(req.body, modeloRegistro, 'Alguno de los datos no es correcto')
        return next()
    }catch(error){
        throw new Error(error);
    }
}

module.exports = {limiteConsultas, revisarLogin, revisarRegistro, usuarioValido}