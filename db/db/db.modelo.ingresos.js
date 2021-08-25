const {DataTypes, Model} = require ('sequelize')
const sequelize = require('./db.conection')
const Periodos = require('./db.modelo.periodos')
const Conceptos_Ingresos = require('./db.modelo.conceptos_ingresos');
const Presupuestos = require('./db.modelo.presupuestos');
const Usuarios = require('./db.modelo.usuarios');

//Datos que contendra la tabla Ingresos

const Ingresos = sequelize.define ('Ingresos',{
    ingreso:{
        type: DataTypes.FLOAT,
        allowNull: false
    },

    id_concepto_ingreso:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_periodo:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_presupuesto:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_usuario:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
},{
    timestamps: false
});
Ingresos.belongsTo(Periodos, {foreignKey: 'id_periodo'});
Ingresos.belongsTo(Conceptos_Ingresos, {foreignKey: 'id_concepto_ingreso'});
Ingresos.belongsTo(Presupuestos, {foreignKey: 'id_presupuesto'});
Ingresos.belongsTo(Usuarios, {foreignKey: 'id_usuario'});


module.exports = Ingresos