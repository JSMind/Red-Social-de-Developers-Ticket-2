const {DataTypes, Model} = require ('sequelize')
const sequelize = require('./db.conection')
const Periodos = require('./db.modelo.periodos')
const Recursos_Rol = require('./db.modelo.recursos_role')
const Presupuestos = require('./db.modelo.presupuestos');
const Usuarios = require('./db.modelo.usuarios');



//Datos que contendra la tabla Porcentaje_Recursos

const Porcentajes_Recursos = sequelize.define ('Porcentajes_Recursos',{
    porcentaje_monto:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    id_recurso_rol:{
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
Porcentajes_Recursos.belongsTo(Periodos, {foreignKey: 'id_periodo'});
Porcentajes_Recursos.belongsTo(Recursos_Rol, {foreignKey: 'id_recurso_rol'});
Porcentajes_Recursos.belongsTo(Presupuestos, {foreignKey: 'id_presupuesto'});
Porcentajes_Recursos.belongsTo(Usuarios, {foreignKey: 'id_usuario'});


module.exports = Porcentajes_Recursos