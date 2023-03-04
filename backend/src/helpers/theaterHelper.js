const Theater = require("../models/theater");

module.exports.theaterHelper = {
    //  ADDING theater DETAILS
    create: async (data) => {
       
        const { name, districtId, slots } = data;
        return new Promise(async (resolve, reject) => {

            const newTheater = new Theater();
            newTheater.name = name;
            newTheater.districtId = districtId;
            newTheater.slots = slots;
            await newTheater.save((err, result) => {
                if (!err) {
                    resolve(result)
                }
                reject(err)
            })
        })
    },

    // FINDING ALL TheaterS.... 
    getAll: () => {
        return new Promise((resolve, reject) => {
            Theater.find({}).populate('districtId').then((theaters) => {
                resolve(theaters)
            })
        })
    },

    //find teator by id
    findById:(id)=>{
        return new Promise((resolve,reject)=>{
          Theater.findOne({ _id: id }).populate('districtId').exec(function(err,result){
            if(!err){
                resolve(result)
            }
            reject(err)
          })
          
        })
      },

    // UPDATING theater....
    updateTheater: (data) => {
        return new Promise((resolve, reject) => {
            Theater.findOneAndUpdate({ _id: data.id},{
                name:data.name,
                districtId:data.districtId,
                slots:data.slots
            },{new:true}, (err, result) => {
                if (!err) resolve(result)
                else reject()
            })
        })
    },
    deleteTheater: (data) => {
        return new Promise((resolve, reject) => {
            Theater.findByIdAndDelete({ _id: data.id }, (err, result) => {
                if (!err) resolve(result)
                else reject()
            })

        })

    }
};