const {Flight} = require('../models/index');
const {Op} = require('sequelize')

class FlightRepository{
    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.depatureAirportId){
            filter.depatureAirportId = data.depatureAirportId;
        }
        /*if(data.minPrice && data.maxPrice){
            Object.assign(filter,{
                [op.and]:[
                    {Price : {[op.lte]: data.maxPrice}},
                    {Price : {[op.gte]: data.minPrice}}
                ]
            })
        }*/
        let priceFilter = [];
        if(data.maxPrice){
            priceFilter.push({Price : {[Op.lte]: data.maxPrice}})
        }
        if(data.minPrice){
            priceFilter.push({Price : {[Op.gte]: data.minPrice}})
        }
        Object.assign(filter,{[Op.and]:priceFilter})
        return filter;
    }
    async createFlight(data){
        try {
            const flights = await Flight.create(data);
            return flights;
        } catch (error) {
            console.log("at repo",error);
            throw {error};
        }
    }

    async getFlight(data){
        try {
            const flight = await Flight.findByPk(data.id);
            return flight;
        } catch (error) {
            console.log("at repo",error);
            throw {error};
        }
    }

    async getAllFlights(filter){
        try {
            const filterObject = this.#createFilter(filter);
            const flights = await Flight.findAll({
                where : filterObject
            });
            return flights;
        } catch (error) {
            console.log("at repo",error);
            throw {error};
        }
    }

    async updateFlight(flightId,data){
        try {
            const flight = await Flight.update(data,{
                where : {
                    id : flightId
                }
            });
            return true;
        } catch (error) {
            console.log("at repo",error);
            throw {error};
        }
    }
}


module.exports = FlightRepository;