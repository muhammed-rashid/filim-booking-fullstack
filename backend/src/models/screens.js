const mongoose = require('mongoose')
const ScreenShema = mongoose.Schema({
    name:{
        type:String
    },
    noOfSeats:{
        type:Number
    },
    theater:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Theater'
    },
    seats:[],
    filim:[
        {
            "filim":{
                type: mongoose.Schema.Types.ObjectId,
                ref:'Filim'
            },
            "slot":String,
            "bookings":[
                {
                    "user":{
                        type:mongoose.Schema.Types.ObjectId,
                        ref:'User'
                    },
                    "seats":[],
                    "date":Date
                }
            ]


        }

    ]
})

module.exports = mongoose.model("Screen",ScreenShema)