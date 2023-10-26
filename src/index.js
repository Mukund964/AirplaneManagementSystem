const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const CityRepository = require('./repository/cityRepo');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

const setupServer = async ()=>{

    app.listen(PORT,async ()=>{
        console.log(`server is up and running at ${PORT}`);
        const repo = new CityRepository();
        repo.createCity({Name : "New Delhi"});
    })
};
setupServer();