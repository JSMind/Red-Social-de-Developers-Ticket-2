const {DataTypes, Model} = require ('sequelize')
const sequelize = require('./db.conection')


//Datos que contendra la tabla Recursos_Rol

const Recursos_Role = sequelize.define ('Recursos_Role',{
    numero_role:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombre_role:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    recurso_monto:{
        type: DataTypes.FLOAT,
        allowNull: false
    }
    
    },{
    timestamps: false

});

module.exports = Recursos_Role


