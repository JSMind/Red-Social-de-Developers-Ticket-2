const {DataTypes, Model} = require ('sequelize')
const sequelize = require('./db.conection')
const Periodos = require('./db.modelo.periodos')
const Conceptos_Costos_Directos = require('./db.modelo.conceptos_costos_directos');
const Presupuestos = require('./db.modelo.presupuestos');
const Usuarios = require('./db.modelo.usuarios');

//Datos que contendra la tabla Costos_Directos

const Costos_Directos = sequelize.define ('Costos_Directos',{
    costo_directo:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    id_concepto_costo_directo:{
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
Costos_Directos.belongsTo(Periodos, {foreignKey: 'id_periodo'});
Costos_Directos.belongsTo(Conceptos_Costos_Directos, {foreignKey: 'id_concepto_costo_directo'});
Costos_Directos.belongsTo(Presupuestos, {foreignKey: 'id_presupuesto'});
Costos_Directos.belongsTo(Usuarios, {foreignKey: 'id_usuario'});


module.exports = Costos_Directos