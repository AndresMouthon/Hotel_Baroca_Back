const { Model, DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../../../config/sequelize.config");
const { Espacio } = require("../espacio/Espacio.model");

class Reserva_evento extends Model { };

Reserva_evento.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    espacio_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Espacio,
            key: "id",
        },
    },
    fecha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hora: {
        type: DataTypes.STRING,
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
    modelName: "Reserva_evento",
    tableName: "reserva_eventos",
    timestamps: false,
});

Espacio.hasMany(Reserva_evento, { foreignKey: "espacio_id" });
Reserva_evento.belongsTo(Espacio, { foreignKey: "espacio_id" });

module.exports = {
    Reserva_evento,
};