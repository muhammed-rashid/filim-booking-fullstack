const Screen = require('../models/screens');
module.exports.screenHelper = {
    //get all screens
    getAll:()=>{

        return new Promise((resolve,reject)=>{
          Screen.find({},function(err,res){
            if(!err){
              resolve(res)
              
            }
          })
        })
      
      },
    store:(data)=>{
        return new Promise((resolve,reject)=>{
            let _screen = new Screen();
            _screen.name = data.name;
            _screen.theater = data.theater;
            _screen.noOfSeats = data.noOfSlots;
            _screen.seats = generateSeats(data.noOfSlots)

            _screen.save(function(err,res){
                if(!err){
                    resolve(res)
                }
                reject(err)
            })
        })
    },
    //get screen by id
    findById:(id)=>{
        return new Promise((resolve,reject)=>{
          Screen.findOne({ _id: id }, (err, result) => {
            if (!err) {
              resolve(result);
            }
            reject(err)
          });
        })
      },

    //update screen
    update:(data)=>{
        return new Promise((resolve,reject)=>{
            Screen.findByIdAndUpdate({'_id':data.id},{
                name:data.name,
                theater:data.theater,
                noOfSeats:data.noOfSeats,
                seats:generateSeats(data.noOfSlots)

            },{new:true}).exec(function(err,result){
                if(!err){
                    resolve(result)
                }
                reject(err)
            })
        })
    },
    delete:(id)=>{
        return new Promise((resolve,reject)=>{
            Screen.findByIdAndDelete({'_id':id},function(err,res){
                if(!err){
                    resolve(res)
                }
                reject(err)
            })
        })
    }

    
}
const generateSeats =(count)=>{
    seats =[];
    if(count){
        for(let i=1;i<=count;i++){
            seats.push('A-'+i);
        }

    }
    return seats;
}