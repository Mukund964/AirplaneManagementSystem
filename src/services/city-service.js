const {CityRepository} = require('../repository/index');

class CityService{
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
    async destroy(cityId){
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
    async getall(filter){
        try {
            if(filter){
                const cities = this.cityRepo.getallcity(filter);
                return cities;
            }
            const cities = this.cityRepo.getallcity();
            return cities;
        } catch (error) {
            console.log("at service layer",error);
            throw {error};
        }
    }

    async createCities(data){
        try {
            const response = this.cityRepo.createMany(data);
            return response;
        } catch (error) {
            console.log("at service layer",error);
            throw {error};
        }
    }
}
module.exports = CityService;