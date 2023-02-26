const { districtHelper } = require("../../helpers/districtHelper");

module.exports.districtController = {
  index:async(req,res,next)=>{
    let districts = await districtHelper.getAll(req.body);
    return res.status(200).json({success:true,districts,page:req.body.page,pagePerItem:req.body.pagePerItem})
  },
  create: async (req, res,next) => {
    try {
      let district = await districtHelper.store(req.body);
      return res.status(200).json({
        success: true,
        message: "New District Added successfully",
        data: district,
      });
    } catch (err) {
      next(err);
    }
  },
  show:async(req,res,next)=>{
    let district = await districtHelper.findById(req.params.id);
    if(district){
      return res.status(200).json({
        success:true,
        data:district
      })
    }
    next("District Not found");
  },

  update:async(req,res,next)=>{

    try{
      let district = await districtHelper.update(req.body);
      if(district){
        return res.status(200).json({
          success:true,
          message:"district updated successfully",
          district:district
        });
      }

    }catch(err){
      next(err)
    }
   
  },
  delete:async(req,res,next)=>{
  
    action = await districtHelper.delete(req.params.id);
    if(action){
      return res.status(200).json({
        success:true,
        message:"District deleted successfully"
      });
    }
    next("District not found");
  }
  
};
