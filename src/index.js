const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routers/index');


const setupServer = async ()=>{
    const app = express();
    
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    
    app.use('/api',ApiRoutes);
    app.listen(PORT,async ()=>{
        console.log(`server is up and running at ${PORT}`);
    })
};
setupServer();