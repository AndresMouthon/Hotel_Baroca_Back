'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('preregistros', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha_ingreso: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_habitacion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cliente_id: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
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
      modelName: "preregistros",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('preregistros');
  }
};