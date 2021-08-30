//Importacion de modulos necesarios a utilizar
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const sequelize = require('./db/db.conection')

const Usuarios = require('./db/db.modelo.usuarios');
const Usuario_Permisos = require('./db/db.modelo.usuario_permisos');
const Usuario_Comentarios = require('./db/db.modelo.usuario_comentarios');
const Usuario_Solicitudes_Amistades = require('./db/db.modelo.usuario_solicitudes_amistades');
const Usuario_Amigos = require('./db/db.modelo.usuario_amigos');
const Perfiles = require('./db/db.modelo.perfiles');
const Usuario_Caracteristicas = require('./db/db.modelo.usuario_caracteristicas');
const Usuario_Calificaciones = require('./db/db.modelo.usuario_calificaciones');


const vistaApp = require('./app/vistas/vista.app');
const vistaUsuarios = require('./app/vistas/vista.usuarios');


const middUsuarios = require('./middelwares/midd.usuarios');

//Middlewares Globales
app.use(express.json())
app.use(cors())
app.use(middUsuarios.limiteConsultas)


//Configuraciones Globales
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//Inicializamos el Servidor 
async function iniciarServidor() {
    try {
        await Usuario_Permisos.sync({ alter: true });   
        await Usuarios.sync({ alter: true });
        await Usuario_Comentarios.sync({ alter: true });
        await Usuario_Solicitudes_Amistades.sync({ alter: true });
        await Usuario_Amigos.sync({ alter: true });
        await Perfiles.sync({ alter: true });
        await Usuario_Caracteristicas.sync({ alter: true });
        await Usuario_Calificaciones.sync({ alter: true });

        await sequelize.authenticate();
        console.log('Se establecio una conexion exitosa con la base de datos');
        app.listen(process.env.PORT, () => {
            console.log(`El servidor se ha iniciado correctamente en : ${process.env.HOST}:${process.env.PORT}`)
        });

    } catch (error) {
        console.log(`No se conecto con la base de datos: ${error}`);

    }
}

iniciarServidor();



//Inicializar las vistas
vistaApp(app);
vistaUsuarios(app);

