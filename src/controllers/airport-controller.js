const {AirportService} = require('../services/index');
const {successCodes} = require('../utils/ErrorCodes')
const airportService = new AirportService();
const create = async (req,res) =>{
    try {
        const Airport = await airportService.create(req.body);
        res.status(successCodes.CREATED).json({
            data : Airport,
            message: "Airport created successfully",
            success : true,
            err : {}
        })
    } catch (error) {
        console.log("at controller",error);
        res.status(500).json({
            data : {},
            message: "not created succesfully",
            success : false,
            err : {error}
        })
    }
}

const destroy = async (req,res) => {
    try {
        const response = await airportService.destory(req.params.id);
        res.status(successCodes.OK).json({
            data : {},
            message: "Airport Deleted successfully",
            success : true,
            err : {}
        })
    } catch (error) {
        console.log("at controller");
        res.status(500).json({
            data : {},
            message: "not Deleted succesfully",
            success : false,
            err : {error}
        })
    }
}

const get = async (req,res) =>{
    try {
        const Airport = await airportService.get(req.params.id);
        res.status(successCodes.OK).json({
            data : Airport,
            message: "Airport Fetched successfully",
            success : true,
            err : {}
        })
    } catch (error) {
        console.log("at controller",error);
        res.status(500).json({
            data : {},
            message: "not able to fetch succesfully",
            success : false,
            err : {error}
        })
    }
}

const update = async (req,res) =>{
    try {
        const Airport = await airportService.update(req.params.id,req.body);
        res.status(successCodes.CREATED).json({
            data : Airport,
            message: "Airport Updated successfully",
            success : true,
            err : {}
        })
    } catch (error) {
        console.log("at controller");
        res.status(500).json({
            data : {},
            message: "not able to Update succesfully",
            success : false,
            err : {error}
        })
    }
}

const getAll = async (req,res) =>{
    try {
        const Airports = await airportService.getAll();
        res.status(successCodes.OK).json({
            data : Airports,
            message: "Airports Fetched successfully",
            success : true,
            err : {}
        })
    } catch (error) {
        console.log("at controller");
        res.status(500).json({
            data : {},
            message: "not able to Fetch succesfully",
            success : false,
            err : {error}
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}