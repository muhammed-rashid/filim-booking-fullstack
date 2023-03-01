const mongoose = require("mongoose")
const teatorSchema = mongoose.Schema({
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

        }
    ]
});
module.exports = mongoose.model("Teator",teatorSchema);