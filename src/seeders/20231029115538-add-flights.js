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
    await queryInterface.bulkInsert('Flights', [
      {
        airplaneModel: 'Airbus A330',
         airplaneId:1,
         ArrivalTime : new Date(),
         DepartureTime :new Date(),
         departureAirport:2,
         arrivalAirport:3,
         TotalSeats:300,
         Price:4500,
         createdAt: new Date(),
         updatedAt:new Date()
       },
       {
        airplaneModel: 'Boeing 747',
         airplaneId:3,
         ArrivalTime : new Date(),
         DepartureTime :new Date(),
         departureAirport:2,
         arrivalAirport:3,
         TotalSeats:300,
         Price:5500,
         createdAt: new Date(),
         updatedAt:new Date()
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
