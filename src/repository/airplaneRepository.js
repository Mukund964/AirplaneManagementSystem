const {Airplane} = require('../models/index');

class AirplaneRepository{
    async get(id){
        try {
            const plane = await Airplane.findByPk(id);
            return plane;
        } catch (error) {
            console.log("at repo",error);
            throw {error};
        }
    }

    async create(data){
        try {
            const plane = await Airplane.create(data);
            return plane;
        } catch (error) {
            console.log("at repo",error);
            throw {error};
        }
    }
}
module.exports = AirplaneRepository;