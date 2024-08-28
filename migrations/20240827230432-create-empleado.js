'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('empleados', {
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombres: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apellidos: {
        type: Sequelize.STRING,
        allowNull: false
      },
      genero: {
        type: Sequelize.ENUM('Masculino', 'Femenino'),
        allowNull: false,
      },
      fecha_nacimiento: {
        type: Sequelize.STRING,
        allowNull: false
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
      modelName: 'empleados',
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('empleados');
  }
};