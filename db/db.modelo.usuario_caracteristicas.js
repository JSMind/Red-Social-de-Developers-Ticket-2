// Importar los modulos necesarios
const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conection');

//Datos que contendra la tabla Usuarios
const Usuario_Caracteristicas = sequelize.define('Usuario_Caracteristicas',{
    nombre_caracteristica:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    contenido: {
        type: DataTypes.STRING(200),
        allowNull: false
    }

}, {
    timestamps: true,
    createdAt: 'fecha_registro',
    updatedAt: 'fecha_actualizacion'
});

// Exportar el modelo
module.exports = Usuario_Caracteristicas
