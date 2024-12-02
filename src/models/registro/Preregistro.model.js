const { Model, DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../../../config/sequelize.config");
const { Cliente } = require("../persona/Cliente.model");
const { Espacio } = require("../espacio/Espacio.model");

class Preregistro extends Model { };

Preregistro.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fecha_ingreso: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    tipo_habitacion: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cliente,
            key: "id",
        },
    },
    espacio_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Espacio,
            key: "id",
        },
    },
    observacion: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "En proceso",
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
    modelName: "Preregistro",
    tableName: "preregistros",
    timestamps: false,
});

Cliente.hasMany(Preregistro, { foreignKey: "cliente_id" });
Preregistro.belongsTo(Cliente, { foreignKey: "cliente_id" });

Espacio.hasMany(Preregistro, { foreignKey: "espacio_id" });
Preregistro.belongsTo(Espacio, { foreignKey: "espacio_id" });

module.exports = {
    Preregistro
};