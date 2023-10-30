'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flight.init({
    flightNumber:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    airplaneId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    ArrivalTime: {
      type:DataTypes.DATE,
      allowNull:false
    },
    DepartureTime: {
      type:DataTypes.DATE,
      allowNull:false
    },
    arrivalAirportId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    departureAirportId:{ 
      type: DataTypes.INTEGER,
      allowNull:false
    },
    TotalSeats: {
      type:DataTypes.INTEGER,
      defaultValue:200
    },
    Price: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    boardingGate:{
      type : DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};