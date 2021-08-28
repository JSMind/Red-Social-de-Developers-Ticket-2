// Importar los modulos necesarios
const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conection');
const Usuarios = require('./db.modelo.usuarios');

//Datos que contendra la tabla Usuarios
const Perfiles = sequelize.define('Perfiles',{
    id_usuario:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre_perfil:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    foto_perfil:{
        type: DataTypes.STRING(150),
        allowNull: false
    },
    ciudad:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    pais:{
        type: DataTypes.STRING(40),
        allowNull: false
    },
    edad:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estudios:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    idiomas:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    linkedin:{
        type: DataTypes.STRING(300),
        allowNull: false
    },
    hobbies:{
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'fecha_registro',
    updatedAt: 'fecha_actualizacion'
});

Perfiles.belongsTo(Usuarios,{foreignKey: 'id_usuario'}); //Especificacion de foreignKey que asociara la tabla Usuarios con la Tabla Permisos

// Exportar el modelo
module.exports = Perfiles
