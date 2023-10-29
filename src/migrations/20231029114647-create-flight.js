'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airplaneModel: {
        allowNull: false,
        type: Sequelize.STRING
      },
      airplaneId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ArrivalTime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      DepartureTime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      arrivalAirport: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      departureAirport: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      TotalSeats: {
        defaultValue:200,
        type: Sequelize.INTEGER
      },
      Price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};