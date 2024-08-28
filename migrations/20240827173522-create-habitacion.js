'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('habitaciones', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_habitacion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descripcion_habitacion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero_habitacion: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      capacidad_habitacion: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      precio_habitacion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_habitacion: {
        type: Sequelize.ENUM("Estandar", "Doble", "Triple"),
        allowNull: false,
      },
      disponibilidad: {
        type: Sequelize.ENUM("Disponible", "No disponible"),
        allowNull: false,
        defaultValue: "Disponible"
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      update_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
    }, {
      timestamps: false,
      modelName: "habitaciones",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('habitaciones');
  }
};