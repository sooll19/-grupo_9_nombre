'use strict';

const brands = require('../../data/brands.json');
const brandsFormatDB = brands.map(({ name }) => {
  return {
    name,
    createdAt: new Date,
    updatedAt: new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Brands', brandsFormatDB, {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Brands', null, {});

  }
};