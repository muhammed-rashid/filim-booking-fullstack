const mongoose = require("mongoose")
const theaterSchema = mongoose.Schema({
    name:{
        
        required:true,
        type:String,
        trim:true
    },
    districtId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'District'
    },
    slots:[
        {
           "name":String,
           "time": String
        }
    ]
});
module.exports = mongoose.model("Theater",theaterSchema);