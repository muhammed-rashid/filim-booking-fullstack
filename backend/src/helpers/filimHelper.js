
const Filim = require("../models/filim");



module.exports.filimHelper = {

    create:  async (data) => {
          const { name , category, actors, releaseDate } = data
      return  new Promise( async   (resolve, reject) => {

            console.log("promise working");
            const newFilim  =  new Filim()

            newFilim.name = name;
            newFilim.category = category;
            newFilim.actors = actors;
            newFilim.releaseDate = releaseDate;

           

           await  newFilim.save((err, result) => {

                if(!err){
                    resolve(result)
                }
                else{
                    reject(err)
                }
            })
        })
    },

    getAll: (data) => {

        return new Promise((resolve, reject) => {
            
            Filim.find({}).then((filims) =>{
                resolve(filims)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    },

    // FINDING FILM BY ID
    fingById: (id) => {

        return new Promise((resolve, reject) => {
            Filim.findOne({_id:id}, (error, result) => {

                if(!error){
                    resolve(result)
                }
                else{
                    reject(error)
                }
            })
        })
    },
    // DELETE FILM BY ID
     deleteFilm : (id) => {

        return new Promise((resolve, reject) => {
             
            Filim.findOneAndDelete({_id:id}).then((result) => {
                resolve(result)
            }).catch((error) => {
                reject(error)
            })
        })

     },
     updateFilm: (data) => {

        return new Promise((resolve, reject) => {
            Filim.findByIdAndUpdate({_id:data.id}, {
                name:data.name,
                category:data.category,
                actors:data.actors,
                releaseDate:data.releaseDate
            }, {new:tru}).exec((error, result) => {
                if(!error) {
                    resolve(result)
                }
                else reject(error)
            })
        })
     }


}