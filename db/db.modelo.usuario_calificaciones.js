// Importar los modulos necesarios
const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conection');
const Usuarios = require('./db.modelo.usuarios');
const Usuario_Caracteristicas = require('./db.modelo.usuario_caracteristicas');

//Datos que contendra la tabla Usuarios
const Usuario_Calificaciones = sequelize.define('Usuario_Calificaciones',{
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_caracteristica: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    calificacion: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    timestamps: true,
    createdAt: 'fecha_registro',
    updatedAt: 'fecha_actualizacion'
});

Usuario_Calificaciones.belongsTo(Usuarios, {foreignKey: 'id_usuario'});
Usuario_Calificaciones.belongsTo(Usuario_Caracteristicas, {foreignKey: 'id_caracteristica'});

// Exportar el modelo
module.exports = Usuario_Calificaciones
