const { Model, DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../../../config/sequelize.config");
const { Habitacion } = require("../habitacion/Habitacion.model");
const { Preregistro } = require("./Preregistro.model");

class Reserva extends Model { };

Reserva.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    ciudad_procedencia: {
        type: DataTypes.STRING,
        allowNull: false,  
    },
    ciudad_destino: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    transporte: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    motivo_viaje: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    habitacion_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Habitacion,
            key: 'id',
        },
    },
    preregistro_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Preregistro,
            key: 'id',
        },
    },
    noches: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
    },
    update_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "Reserva",
    tableName: "reservas",
    timestamps: false,
});

Habitacion.hasMany(Reserva, { foreignKey: "habitacion_id" });
Reserva.belongsTo(Habitacion, { foreignKey: "habitacion_id" });
Preregistro.hasOne(Reserva, { foreignKey: "preregistro_id" });
Reserva.belongsTo(Preregistro, { foreignKey: "preregistro_id" });

module.exports = { Reserva };