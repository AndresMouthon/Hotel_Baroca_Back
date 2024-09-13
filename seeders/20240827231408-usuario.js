'use strict';

const { hashPassword } = require('../src/utils/functions.util');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {
        documento: "1003059060",
        password: await hashPassword('123456'),
        rol_id: 1,
      },
      {
        documento: "1063080464",
        password: await hashPassword('123456'),
        rol_id: 1,
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
