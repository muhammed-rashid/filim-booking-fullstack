const mongoose = require("mongoose")
const theaterSchema = mongoose.Schema({
    name:{
        
        required:true,
        type:String,
        trim:true
    },
    districtId:{
        type: String,
    },
    slots:[
        {
           "a":String,
           "b": String
        }
    ]
});
module.exports = mongoose.model("Theater",theaterSchema);