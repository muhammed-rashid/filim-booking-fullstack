const Teator = require("../models/teator");

module.exports.teatorHelper = {

    create: async (data) => {
        console.log("CREATE WORKING........");
        const { name, district, slots } = data
        return new Promise(async (resolve, reject) => {

            const newTeator = new Teator({
                name: name,
                district: district,
                slots: slots
            })
            await newTeator.save((err, newTeator) => {

                if (!err) {
                    console.log("RESOLVING.....");

                    resolve(newTeator)
                }
                console.log("ERROR");
                reject(err)
            })
        })
    },
    getAll: () => {

        return new Promise(  (resolve, reject) => {
    
              Teator.find().then((teators) => {

                resolve(teators)
              })

        })
    },

    updateTeator: (id) =>{


        return new Promise((resolve, reject) => {
            
            Teator.findOneAndUpdate({_id: id}, (err, result) => {

                if(!err) resolve(result)
                
                else{
                    reject()
                }
            })
           
        })

    },
    deleteTeator:(id) => {

        return new Promise((resolve, reject) => {
            
             Teator.findByIdAndDelete({_id:id}, (err, result) => {

                if (!err) resolve(result)
                else reject()
             })

        })

    } 
};