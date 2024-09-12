'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('espacios', [
      {
        descripcion: "Hotel baroca",
        tipo_espacio: "hospedaje"
      },
      {
        descripcion: "Hotel costa bonita",
        tipo_espacio: "hospedaje"
      },
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
