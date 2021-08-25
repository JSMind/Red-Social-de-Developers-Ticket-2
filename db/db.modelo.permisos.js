//Importo los modulos necesarios
const {DataTypes, Model } = require('sequelize');
const sequelize = require('./db.conection')

// Datos que contendra la tabla Permisos , para definir el usuario tipo administrador y usario normal

const Permisos = sequelize.define('Permisos' , {
    tipo_usuario: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    
    descripcion: {
        type: DataTypes.STRING(20),
        allowNull: false,       
    }
}, {
    timestamps: false
})


module.exports = Permisos