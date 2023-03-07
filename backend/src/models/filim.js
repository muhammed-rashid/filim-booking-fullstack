const mongoose = require('mongoose')

const filimSchema = mongoose.Schema({

name : {
    type: String,
    required: true,
    trim: true
},
category: {
    type: String,
    required:true
},
actors : [
    {
    name:{
       type: String,
       required:true
    }
}

],
releaseDate:{
    type: Date,
    required: true
}
})

module.exports = mongoose.model("Filim",filimSchema)







