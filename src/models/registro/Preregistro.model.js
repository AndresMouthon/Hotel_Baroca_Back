const { Model, DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../../../config/sequelize.config");
const { Habitacion } = require("../habitacion/Habitacion.model");

class Preregistro extends Model { };

Preregistro.init({
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
    nombres: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pais: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ciudad: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    direccion: {
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
    cantidad_personas: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    cantidad_habitaciones: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    habitacion_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Habitacion,
            key: "id",
        },
    },
    is_group: {
        type: DataTypes.BOOLEAN,
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
    modelName: "Preregistro",
    tableName: "preregistros",
    timestamps: false,
});

Habitacion.hasMany(Preregistro, { foreignKey: "habitacion_id" });
Preregistro.belongsTo(Habitacion, { foreignKey: "habitacion_id" });

module.exports = {
    Preregistro
};