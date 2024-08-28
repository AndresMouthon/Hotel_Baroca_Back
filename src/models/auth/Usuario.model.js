const { Model, DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../../../config/sequelize.config");
const { Rol } = require("./Rol.model");

class Usuario extends Model { };

Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    usuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rol_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Rol,
            key: 'id',
        },
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
    modelName: "Usuario",
    tableName: "usuarios",
    timestamps: false,
});

Rol.hasMany(Usuario, { foreignKey: 'rol_id' });
Usuario.belongsTo(Rol, { foreignKey: 'rol_id' });

module.exports = {
    Usuario
};
