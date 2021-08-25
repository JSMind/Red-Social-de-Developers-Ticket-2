const {DataTypes, Model} = require ('sequelize')
const sequelize = require('./db.conection')

//Datos que contendra la tabla Ingresos

const Conceptos_Ingresos = sequelize.define ('Conceptos_Ingresos',{
    numero_concepto:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    concepto_nombre:{
        type: DataTypes.STRING(100),
        allowNull: false
    }
},{
    timestamps: false
});

module.exports = Conceptos_Ingresos