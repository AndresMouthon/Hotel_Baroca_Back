const { Model, DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../../../config/sequelize.config");

class Espacio extends Model { };

Espacio.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    descripcion: {
        allowNull: false,
        type: DataTypes.STRING,
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
    modelName: "Espacio",
    tableName: "espacios",
    timestamps: false,
});

module.exports = {
    Espacio,
};