const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.wntdy.mongodb.net`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;