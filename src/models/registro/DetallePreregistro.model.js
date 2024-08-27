const { Model, DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../../../config/sequelize.config");
const { Preregistro } = require("./Preregistro.model");

class DetallePreregistro extends Model { };

DetallePreregistro.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo_documento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    documento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preregistro_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Preregistro,
            key: "id"
        },
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_nacimiento: {
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
    modelName: "DetallePreregistro",
    tableName: "detalles_preregistros",
    timestamps: false,
});

Preregistro.hasMany(DetallePreregistro, { foreignKey: "preregistro_id" });
DetallePreregistro.belongsTo(Preregistro, { foreignKey: "preregistro_id" });

module.exports = {
    DetallePreregistro
};