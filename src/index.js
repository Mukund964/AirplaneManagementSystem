const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

const setupServer = async ()=>{

    app.listen(()=>{
        console.log(`server is up and running at ${process.env.PORT}`);
    })
};
setupServer();