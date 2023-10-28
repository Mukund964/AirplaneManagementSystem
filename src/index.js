const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routers/index');
const db = require('./models/index');
const {City,Airport} = require('./models/index');

const setupServer = async ()=>{
    const app = express();
    
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    
    app.use('/api',ApiRoutes);
    app.listen(PORT,async ()=>{
        console.log(`server is up and running at ${PORT}`);
        if(process.env.SYNC){
            db.sequelize.sync({alter : true});
        }
        /*const airports = await Airport.findAll({
            include : [{
                model : City
            }]
        })
        console.log(airports);*/

        /*const city = await City.findOne({
            where : {
                id : 1
            }
        }) */
       /* const newAirport = await Airport.create({
            name : "Muzaffarpur Airport",
            city_Id : 5
        })*/
       /* const newAirport = await Airport.findAll({
            where :{
                city_Id : 1
            }
        }); */
        //await city.addAirport(newAirport);
        //console.log(airports);

    })
};
setupServer();