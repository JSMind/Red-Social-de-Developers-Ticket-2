//Importacion de modulos necesarios a utilizar
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const sequelize = require('./db/db.conection')

const Usuarios = require('./db/db.modelo.usuarios');
const Permisos = require('./db/db.modelo.permisos');


const vistaApp = require('./app/vistas/vista.app');
const vistaUsuarios = require('./app/vistas/vista.usuarios');


const middUsuarios = require('./middelwares/midd.usuarios')

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
        await Permisos.sync({ alter: true });
        await Usuarios.sync({ alter: true });

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

