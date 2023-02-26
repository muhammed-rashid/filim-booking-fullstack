const mongoose = require("mongoose")
const districtSchema = mongoose.Schema({
    name:{
        required:true,
        type:String,
        trim:true
    }
});
module.exports = mongoose.model("District",districtSchema);