const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routers/index');
const db = require('./models/index');

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
    })
};
setupServer();