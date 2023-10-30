'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [
        {
          modelNo:"Boeing 777",
          Capacity:300,
          createdAt:new Date(),
          updatedAt:new Date()
       },
       {
        modelNo:"Airbus A330",
        Capacity:300,
        createdAt:new Date(),
        updatedAt:new Date()
       },
       {
        modelNo:"Boeing 747",
        Capacity:300,
        createdAt:new Date(),
        updatedAt:new Date()
       },
       {
        modelNo:"Boeing 757",
        Capacity:350,
        createdAt:new Date(),
        updatedAt:new Date()
       },
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
