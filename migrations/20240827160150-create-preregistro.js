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
      nombres: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      apellidos: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_documento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      documento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pais: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      departamento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ciudad: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      direccion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefono: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fecha_nacimiento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cantidad_personas: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      cantidad_habitaciones: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      tipo_habitacion: {
        type: Sequelize.ENUM('Estandar', 'Doble', 'Triple'),
        allowNull: true,
      },
      is_group: {
        type: Sequelize.BOOLEAN,
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
      modelName: "preregistros",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('preregistros');
  }
};