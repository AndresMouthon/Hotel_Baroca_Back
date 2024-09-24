const { Model, DataTypes, Sequelize } = require("sequelize");
const { Espacio } = require("../espacio/espacio.model");
const { sequelize } = require("../../../config/sequelize.config");

class Habitacion extends Model { };

Habitacion.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_habitacion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion_habitacion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numero_habitacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    capacidad_habitacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    precio_habitacion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo_habitacion: {
        type: DataTypes.ENUM('Estandar', 'Doble', 'Triple'),
        allowNull: false,
    },
    piso: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    disponibilidad: {
        type: DataTypes.ENUM('Disponible', 'No disponible'),
        allowNull: false,
        defaultValue: "Disponible"

    },
    espacio_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Espacio,
            key: "id",
        },
    },
    estado: {
        type: DataTypes.ENUM("Limpia", "Sucia"),
        allowNull: false,
        defaultValue: "Limpia"
    },
    ventana: {
        type: DataTypes.ENUM("Si", "No"),
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
    modelName: "Habitaciones",
    tableName: "habitaciones",
    timestamps: false,
});

Espacio.hasMany(Habitacion, { foreignKey: "espacio_id" });
Habitacion.belongsTo(Espacio, { foreignKey: "espacio_id" });

module.exports = {
    Habitacion,
}