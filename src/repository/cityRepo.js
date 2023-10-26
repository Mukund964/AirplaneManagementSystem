// repos are used to communicate with the database 
const {City} = require('../models/index');

class CityRepository{
    async createCity({Name}){
        try{
            const city = await City.create({Name});
            return city;
        }catch(error){
            console.log(error);
            throw {error};
        }
    }

    async deleteCity({cityId}){
        try{
            await City.destroy({
                where : {
                    id : cityId
                }
            })
            return true;
        }catch(err){
            console.log(error);
            throw {error}
        }

    }

    async updateCity(cityId,data){
        try {
            const response = await City.update(cityId,data);
            return response;
        } catch (error) {
            console.log(error);
            throw{error};
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findbypk(cityId);
            return city;
        } catch (error) {
            console.log(error);
            throw {error};
        }
    }
};

module.exports = CityRepository;