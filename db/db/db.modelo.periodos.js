const {DataTypes, Model} = require('sequelize')
const sequelize = require('./db.conection')

//Datos que contendra la tabla Proyectos

const Periodos = sequelize.define('Periodos',{
    periodo:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
},{
    timestamps: false
});


module.exports = Periodos