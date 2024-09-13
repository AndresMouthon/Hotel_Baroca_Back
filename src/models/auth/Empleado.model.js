const { Model, DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../../../config/sequelize.config");
const { Usuario } = require("./Usuario.model");

class Empleado extends Model { };

Empleado.init({
    documento: {
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true,
        references: {
            model: Usuario,
            key: 'documento'
        }
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genero: {
        type: DataTypes.ENUM('Masculino', 'Femenino'),
        allowNull: false,
    },
    fecha_nacimiento: {
        type: DataTypes.STRING,
        allowNull: false
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
    modelName: "Empleado",
    tableName: "empleados",
    timestamps: false,
});

Usuario.hasOne(Empleado, { foreignKey: 'documento' });
Empleado.belongsTo(Usuario, { foreignKey: 'documento' });

module.exports = { Empleado };