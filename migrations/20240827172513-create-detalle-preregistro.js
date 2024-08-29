'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detalles_preregistros', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombres: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      apellidos: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_documento: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      documento: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_habitacion: {
        type: Sequelize.ENUM('Estandar', 'Doble', 'Triple'),
        allowNull: false,
      },
      preregistro_id: {
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
      modelName: "detalles_preregistros",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('detalles_preregistros');
  }
};