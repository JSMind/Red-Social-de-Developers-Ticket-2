// Importar los modulos necesarios
const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conection');
const Perfiles = require('./db.modelo.perfiles');

//Datos que contendra la tabla Usuarios
const Usuario_Comentarios = sequelize.define('Usuario_Comentarios',{
    id_comentario:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        
    },
    id_usuario:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_amigo:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comentario:{
        type: DataTypes.STRING(500),
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'fecha_registro',
    updatedAt: 'fecha_actualizacion'
});

Usuario_Comentarios.belongsTo(Perfiles,{foreignKey: 'id_usuario'}); //Especificacion de foreignKey que asociara la tabla Usuarios con la Tabla Permisos
Usuario_Comentarios.belongsTo(Perfiles,{foreignKey: 'id_amigo'});
// Exportar el modelo
module.exports = Usuario_Comentarios
