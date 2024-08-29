const { Model, DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../../../config/sequelize.config");
const { Habitacion } = require("../habitacion/Habitacion.model");

class Reserva extends Model { };

Reserva.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo_documento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    documento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo_habitacion: {
        type: DataTypes.ENUM('Estandar', 'Doble', 'Triple'),
        allowNull: false,
    },
    pais: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    departamento: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ciudad: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    fecha_nacimiento: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cantidad_persona: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    cantidad_habitacion: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
    codigo_grupo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    is_group: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    fecha_salida: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_entrada: {
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

module.exports = { Reserva };