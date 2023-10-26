const {CityRepository} = require('../repository/index');

class cityService{
    constructor(){
        this.cityRepo = new CityRepository();
    }

    async create(data){
        try {
            const city = this.cityRepo.createCity(data);
            return city;
        } catch (error) {
            console.log("at service layer",error);
            throw {error};
        }
    }
    async delete(cityId){
        try {
            const response = this.cityRepo.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("at service layer",error);
            throw {error};
        }
    }
    async get(cityId){
        try {
            const city = this.cityRepo.getCity(cityId);
            return city;
        } catch (error) {
            console.log("at service layer",error);
            throw {error};
        }
    }
    async update(cityId,data){
        try {
            const city = this.cityRepo.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log("at service layer",error);
            throw {error};
        }
    }
}
module.exports = cityService;