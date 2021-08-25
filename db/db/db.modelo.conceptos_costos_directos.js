const {DataTypes, Model} = require ('sequelize')
const sequelize = require('./db.conection')

//Datos que contendra la tabla Conceptos_Costos_Directos

const Conceptos_Costos_Directos = sequelize.define ('Conceptos_Costos_Directos',{
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

module.exports = Conceptos_Costos_Directos