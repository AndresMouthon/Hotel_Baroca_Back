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
      numero_habitacion: {
        type: Sequelize.INTEGER,
      },
      tipo_habitacion: {
        type: Sequelize.STRING,
      },
      estado: {
        type: Sequelize.STRING,
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