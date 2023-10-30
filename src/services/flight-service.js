const {FlightRepository,AirplaneRepository} = require('../repository/index');
const {compareTime} = require('../utils/compare');

class FlightService{
    constructor(){
        this.FlightRepository = new FlightRepository();
        this.AirplaneRepository = new AirplaneRepository();
    }
    async Create(data){
        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw {error : 'Arrival Should be before Departure'};
            };
            const Airplane = await this.AirplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.FlightRepository.createFlight({...data,TotalSeats:Airplane.Capacity});
            return flight;
        } catch (error) {
            console.log("at service layer",error);
            throw {error};
        }
    }

    async findFlight(data){
        try {
            const flight = await this.FlightRepository.getFlight(data);
            return flight;
        } catch (error) {
            console.log("at service layer",error);
            throw {error};
        }
    }
    
    async findAllFlights(data){
        try {
            const flights = await this.FlightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("at service layer",error);
            throw {error};
        }
    }
}

module.exports = FlightService;