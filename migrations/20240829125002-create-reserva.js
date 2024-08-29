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
      telefono: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_habitacion: {
        type: Sequelize.ENUM('Estandar', 'Doble', 'Triple'),
        allowNull: false,
      },
      pais: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      departamento: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ciudad: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      direccion: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cantidad_persona: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      cantidad_habitacion: {
        type: Sequelize.INTEGER,
        allowNull: true,
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
      codigo_grupo: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fecha_nacimiento: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      is_group: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      fecha_salida: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fecha_entrada: {
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