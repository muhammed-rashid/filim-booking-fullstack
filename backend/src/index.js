const express = require("express");
const env = require("dotenv");
const connectDB = require("./db/connection");
const UserRoutes = require("./routes/User");
const AdminRoutes = require('./routes/Admin');

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
app.use('/api/admin',AdminRoutes);


app.use(serverErrorHandler);




// app.listen(process.env.PORT, () =>
//   console.log("Server running on port " + process.env.PORT)
// );








const PORT = process.env.PORT|| 5000;
app.listen(PORT, () =>
  console.log(`Server running on port:  http://localhost:${PORT}`)
);
