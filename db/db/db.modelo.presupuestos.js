const {DataTypes, Model} = require ('sequelize')
const sequelize = require('./db.conection')
const Proyectos = require('./db.modelo.proyectos')

//Datos que contendra la tabla Presupuestos

const Presupuestos = sequelize.define ('Presupuestos',{
    id_proyecto:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    version:{
        type: DataTypes.CHAR(50),
        allowNull: false
    }
  
},{
    timestamps: false
});

Presupuestos.belongsTo(Proyectos, {foreignKey: 'id_proyecto'});








module.exports = Presupuestos