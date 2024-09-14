'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('empleados', [
      {
        usuario_id: 1,
        documento: "1003059060",
        nombres: 'Andres Domingo',
        apellidos: 'Mouthon',
        genero: 'Masculino',
        fecha_nacimiento: "29/02/2002",
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
