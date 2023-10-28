// repos are used to communicate with the database 
const {City} = require('../models/index');
const { Op } = require("sequelize");

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

    async deleteCity(cityId){
        try{
            await City.destroy({
                where : {
                    id : cityId
                },
            })
            return true;
        }catch(err){
            console.log(err);
            throw {err}
        }

    }

    async updateCity(cityId,data){
        try {
           /* const response = await City.update({Name : data.Name},{
                where : {
                    id : cityId
                }
            });
            return response; */
            const city = await City.findByPk(cityId);
            city.Name = data.Name;
            await city.save();
            return city;
        } catch (error) {
            console.log(error);
            throw{error};
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log(error);
            throw {error};
        }
    }
    async getallcity(filter){
        try {
            if(filter.name) {
                let cities = await City.findOne({
                    where : {
                        Name : {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("at repository",error);
            throw {error};
        }
    }

    async createMany(data){
        try {
            const citiesData = data.Name.map(Name => ({ Name }));
            const response = await City.bulkCreate(citiesData);
            return response;
        } catch (error) {
            console.log("at repository",error);
            throw {error};
        }
    }
};

module.exports = CityRepository;