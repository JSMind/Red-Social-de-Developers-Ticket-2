// Importar los modulos necesarios
const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conection');
const Perfiles = require('./db.modelo.perfiles');

//Datos que contendra la tabla Usuarios
const Usuario_Solicitudes_Amistades = sequelize.define('Usuario_Solicitudes_Amistades',{
    id_usuario:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_posible_amigo:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'fecha_registro',
    updatedAt: 'fecha_actualizacion'
});

Usuario_Solicitudes_Amistades.belongsTo(Perfiles,{foreignKey: 'id_usuario'}); //Especificacion de foreignKey que asociara la tabla Usuarios con la Tabla Permisos
Usuario_Solicitudes_Amistades.belongsTo(Perfiles,{foreignKey: 'id_posible_amigo'}); 
// Exportar el modelo
module.exports = Usuario_Solicitudes_Amistades
