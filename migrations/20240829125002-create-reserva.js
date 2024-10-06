'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ciudad_procedencia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ciudad_destino: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      transporte: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      motivo_viaje: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      habitacion_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      preregistro_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      fecha_salida: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      noches: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
      modelName: "Reservas",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservas');
  }
};