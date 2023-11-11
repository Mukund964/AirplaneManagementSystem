const {FlightService} = require('../services/index');

const flightService = new FlightService();

const createFlight = async (req,res) =>{
    try {
        const flight = await flightService.Create(req.body);
        res.status(201).json({
            data : flight,
            message: "Flight created successfully",
            success : true,
            err : {}
        })
    } catch (error) {
        console.log("at controller" , error);
        res.status(500).json({
            data : {},
            message: "Flight not created succesfully",
            success : false,
            err : {error}
        })
    }
}

const getFlight = async (req,res) =>{
    try {
        const flight = await flightService.findFlight(req.params);
        res.status(201).json({
            data : flight,
            message: "Flight created successfully",
            success : true,
            err : {}
        })
    } catch (error) {
        console.log("at controller" , error);
        res.status(500).json({
            data : {},
            message: "Flight not Fetched succesfully",
            success : false,
            err : {error}
        })
    }
    
}
const findFlights = async (req,res) =>{
    try {
        const flights = await flightService.findAllFlights(req.query);
        res.status(201).json({
            data : flights,
            message: "Flights fetched successfully",
            success : true,
            err : {}
        })
    } catch (error) {
        console.log("at controller" , error);
        res.status(500).json({
        data : {},
        message: "Flight not Fetched succesfully",
        success : false,
        err : {error}
    })
    }
}

const updateFlight = async (req,res) =>{
    try {
        console.log("Entered update");
        const flight = await flightService.updateFlight(req.params.id,req.body);
        res.status(201).json({
            data : flight,
            message: "Flight updated successfully",
            success : true,
            err : {}
        })
    } catch (error) {
        console.log("at controller" , error);
        res.status(500).json({
        data : {},
        message: "Flight not updated succesfully",
        success : false,
        err : {error}
    })
    }
}
module.exports = {
    createFlight,
    getFlight,
    findFlights,
    updateFlight
}