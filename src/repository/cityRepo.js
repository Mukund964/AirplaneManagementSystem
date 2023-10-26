// repos are used to communicate with the database 
const {City} = require('../models/index');

class CityRepository{
    async createCity({Name}){
        try{
            const city = await City.create({Name});
            return city;
        }catch(error){
            console.log(error);
        }
    }

    async deleteCity({cityId}){
        try{
            await City.destroy({
                where : {
                    id : cityId
                }
            })
        }catch(err){
            console.log(error);
        }

    }
};

module.exports = CityRepository;