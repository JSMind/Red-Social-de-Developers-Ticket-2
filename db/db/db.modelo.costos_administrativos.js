const { DataTypes, Model } = require('sequelize')
const sequelize = require('./db.conection')
const Periodos = require('./db.modelo.periodos')
const Conceptos_Costos_Administrativos = require('./db.modelo.conceptos_costos_administrativos');
const Presupuestos = require('./db.modelo.presupuestos');
const Usuarios = require('./db.modelo.usuarios');

//Datos que contendra la tabla Costos_Administrativos

const Costos_Administrativos = sequelize.define('Costos_Administrativos', {
    costo_administrativo: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    id_concepto_costo_administrativo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_periodo: {
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
   

}, {
    timestamps: false
});
Costos_Administrativos.belongsTo(Periodos, { foreignKey: 'id_periodo' });
Costos_Administrativos.belongsTo(Conceptos_Costos_Administrativos, { foreignKey: 'id_concepto_costo_administrativo' });
Costos_Administrativos.belongsTo(Presupuestos, {foreignKey: 'id_presupuesto'});
Costos_Administrativos.belongsTo(Usuarios, {foreignKey: 'id_usuario'});


module.exports = Costos_Administrativos