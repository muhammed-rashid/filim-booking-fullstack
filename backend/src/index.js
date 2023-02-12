const express = require('express');
const env = require('dotenv')

//express initialization
const app = express();

//env configuration
env.config();

app.use(express.json());

app.listen(process.env.PORT,()=>console.log("Server running on port "+process.env.PORT));

