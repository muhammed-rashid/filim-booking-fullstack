const District = require("../models/District");
module.exports.districtHelper = {
  //create new district
  store:(data)=>{
    
    return new Promise((resolve,reject)=>{
        _district = new District();
        _district.name =data.name;
        _district.save((err,district)=>{
            if(!err){
                resolve(_district)
            }
            reject(err)
        })
    })
  },
  findById:(id)=>{
    return new Promise((resolve,reject)=>{
      District.findOne({ _id: id }, (err, result) => {
        if (!err) {
          resolve(result);
        }
      });
    })
  },
  update:(district)=>{
    console.log(district)
    return new Promise((resolve,reject)=>{
      District.findOneAndUpdate({_id:district.districtId},{name:district.name},{new:true},(err,result)=>{
        if(!err){
          resolve(result)
        }
        reject(err)
      })
    })
  },
  delete:(district)=>{
    return new Promise((resolve,reject)=>{
        District.findOneAndDelete({_id:district},(err,result)=>{
          if(!err){
            resolve(result)
          }
          
        })
    })
  },
  getAll:(query)=>{
    let page = query.page
    let pagePerItem = query.pagePerItem;

    let currentIndex = (page * pagePerItem) - pagePerItem;
    console.log(currentIndex)
    return new Promise((resolve,reject)=>{
      District.find({},{},{ skip: currentIndex, limit: pagePerItem  },function(err,res){
        if(!err){
          resolve(res)
          
        }
      })
    })
  
  }
 
  
  
};
