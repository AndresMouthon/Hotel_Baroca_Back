'use strict';

const { hashPassword } = require('../src/utils/functions.util');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {
        usuario: 'manprosed@gmail.com',
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
