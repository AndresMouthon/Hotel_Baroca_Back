'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('habitaciones', [
      {
        nombre_habitacion: "Triple Familiar",
        descripcion_habitacion: 'La habitación triple cuenta con una cama doble y cama sencilla o tres camas sencillas, ideal para familias o grupos de viajeros.',
        numero_habitacion: 100,
        capacidad_habitacion: 3,
        precio_habitacion: "230000",
        tipo_habitacion: "Triple",
        disponibilidad: "Disponible"
      },
      {
        nombre_habitacion: "Doble Familiar",
        descripcion_habitacion: 'La habitación triple cuenta con una cama doble y cama sencilla o tres camas sencillas, ideal para familias o grupos de viajeros.',
        numero_habitacion: 101,
        capacidad_habitacion: 2,
        precio_habitacion: "180000",
        tipo_habitacion: "Doble",
        disponibilidad: "Disponible"
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
