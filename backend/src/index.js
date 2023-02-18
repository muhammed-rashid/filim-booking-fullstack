const express = require("express");
const env = require("dotenv");
const connectDB = require("./db/connection");
const UserRoutes = require("./routes/User");
const {serverErrorHandler} = require('./middlewares/serverErrorHandler');
//express initialization
const app = express();
//env configuration
env.config();
//databse connection
connectDB();
//json request handler
app.use(express.json());

//routes
app.use("/api/user", UserRoutes);


app.use(serverErrorHandler);
app.listen(process.env.PORT, () =>
  console.log("Server running on port " + process.env.PORT)
);
