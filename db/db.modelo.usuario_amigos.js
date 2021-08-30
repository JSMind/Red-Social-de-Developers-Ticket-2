// Importar los modulos necesarios
const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conection');
const Perfiles = require('./db.modelo.perfiles');
const Usuarios = require('./db.modelo.usuarios');

//Datos que contendra la tabla Usuarios
const Usuario_Amigos = sequelize.define('Usuario_Amigos',{
    id_usuario:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_amigo:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'fecha_registro',
    updatedAt: 'fecha_actualizacion'
});

Usuario_Amigos.belongsTo(Perfiles,{foreignKey: 'id_usuario'}); //Especificacion de foreignKey que asociara la tabla Usuarios con la Tabla Permisos
Usuario_Amigos.belongsTo(Perfiles,{foreignKey: 'id_amigo'});
// Exportar el modelo
module.exports = Usuario_Amigos
