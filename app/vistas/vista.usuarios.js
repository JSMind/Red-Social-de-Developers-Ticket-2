// Importar los modulos necesarios
const controladorUsuarios = require('../controladores/controlador.usuarios');
const midd = require('../../middelwares/midd.usuarios')


// Construir y exportar los modulos
module.exports = async (app) => {

    // Endpoints a los que solo podran acceder los administradores
    app.get('/usuarios', async (req,res) => {                                          //Metodo para listar todos los usarios registrados en la base de datos
        try {
            let consultaUsuarios = await controladorUsuarios.listarUsuarios();
            res.status(200).json({message: 'Consulta exitosa', consultaUsuarios});
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

    // Enpoints a los que podran acceder los usuarios normales
    
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
            if (inspeccionarUsuario){
                let validacion = await controladorUsuarios.generarToken(usuario)               
                res.header('authorization',validacion).json({validacion})
            }else{
                res.status(200).json({message: 'Credenciales incorrectas'})
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })
}

