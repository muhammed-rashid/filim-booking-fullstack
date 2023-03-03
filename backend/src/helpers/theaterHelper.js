const Theater = require("../models/theater");

module.exports.theaterHelper = {
    //  ADDING theater DETAILS
    create: async (data) => {
        console.log("CREATE WORKING........");
        const { name, district, slots } = data
        return new Promise(async (resolve, reject) => {

            const newTheater = new Theater()
            await newTheater.save((err, newTheater) => {

                console.log("Theater CREATED ", newTheater);

                if (!err) {
                    console.log("RESOLVING.....");

                    resolve(newTheater)
                }
                console.log("ERROR");
                reject(err)
            })
        })
    },

    // FINDING ALL TheaterS.... 
    getAll: () => {
        return new Promise((resolve, reject) => {
            Theater.find().then((theaters) => {
                resolve(theaters)
            })
        })
    },
    // UPDATING theater....
    updateTheater: (id) => {
        return new Promise((resolve, reject) => {
            Theater.findOneAndUpdate({ _id: id}, (err, result) => {
                if (!err) resolve(result)
                else {
                    reject()
                }
            })
        })
    },
    deleteTheater: (id) => {
        return new Promise((resolve, reject) => {

            Theater.findByIdAndDelete({ _id: "6400c1881e380908515498eb" }, (err, result) => {

                if (!err) resolve(result)
                else reject()
            })

        })

    }
};