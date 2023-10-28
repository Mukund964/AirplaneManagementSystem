const {CityService} = require('../services/index');

const cityService = new CityService();
const create = async (req,res)=>{
    // post req.body 
    try {
        const city = await cityService.create(req.body);
        res.status(201).json({
            data : city,
            message: "City created successfully",
            success : true,
            err : {}
        })
    } catch (error) {
        console.log("at controller" , error);
        res.status(500).json({
            data : {},
            message: "not created succesfully",
            success : false,
            err : {error}
        })
    }
}
const remove = async (req,res)=>{
    // delete/:id -- req.params.id
    try {
        const response = await cityService.destroy(req.params.id);
        res.status(201).json({
            data : response,
            message: "City deleted successfully",
            success : true,
            err : {}
        })
    } catch (error) {
        console.log("at controller" , {error});
        res.status(500).json({
            data : {},
            message: "not deleted succesfully",
            success : false,
            err : {error}
        })
    }
}
const update = async (req,res)=>{
    // patch /:id  req.body - data
    try {
        const city = await cityService.update(req.params.id,req.body);
        res.status(201).json({
            data : city,
            message: "City updated successfully",
            success : true,
            err : {}
        })
        
    } catch (error) {
        console.log("at controller" , error);
        res.status(500).json({
            data : {},
            message: "not updated succesfully",
            success : false,
            err : {error}
        })
    }
}
const fetch = async (req,res)=>{
    // get /:id
    try {
        const city  = await cityService.get(req.params.id);
        res.status(201).json({
            data : city,
            message: "City fetched successfully",
            success : true,
            err : {}
        })

    } catch (error) {
        console.log("at controller" , error);
        res.status(500).json({
            data : {},
            message: "not able to fetch succesfully",
            success : false,
            err : {error}
        })
    }
}

const findall = async (req,res) => {
    try {
        const allcity = await cityService.getall(req.query);
        res.status(201).json({
            data : allcity,
            message: "Cities fetched successfully",
            success : true,
            err : {}
        })
    } catch (error) {
        console.log("at controller" , error);
        res.status(500).json({
            data : {},
            message: "not able to fetch succesfully",
            success : false,
            err : {error}
        })
    }
}

const createMany = async (req,res) =>{
    try {
        const response = await cityService.createCities(req.body);
        res.status(201).json({
            data : {},
            message: "Cities created successfully",
            success : true,
            err : {}
        })

    } catch (error) {
        console.log("at controller" , error);
        res.status(500).json({
            data : {},
            message: "not able to Add succesfully",
            success : false,
            err : {error}
        })
    }
}

module.exports = {
    create,
    createMany,
    remove,
    update,
    fetch,
    findall
}