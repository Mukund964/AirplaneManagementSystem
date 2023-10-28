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

      await queryInterface.bulkInsert('airports',[
        {
            name : "Indira Gandhi International Airport",
            city_Id: 1,
            createdAt : new Date(),
            updatedAt : new Date()
        },
        {
            name : "Jay Prakash Narayan Airport",
            city_Id :6,
            createdAt : new Date(),
            updatedAt : new Date()

        },
        {
            name : "Gaya International Airpor",
            city_Id :6,
            createdAt : new Date(),
            updatedAt : new Date()
        }
      ],{});
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
