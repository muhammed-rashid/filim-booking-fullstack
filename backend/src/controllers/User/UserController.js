const User = require('../../models/user');
const { userHelper } = require("../../helpers/userHelper")


UserController = {
    signUp :async (req,res,next) =>{

    try{

       var user = await userHelper.registerUser(req.body);
       return res.status(200).json({
        success:true,
        message:"Registration completed successfully",
        user
       });



    }catch(err){
       next(err)

    }

 

        

    }
}

module.exports = UserController;

