const { constants } = require('../../constants/app');
const {adminHelper} = require('../../helpers/adminHelper');
const { utils } = require('../../utils/utils');
module.exports = {
    signUp:async(req,res,next)=>{
        try {
            var admin = await adminHelper.registerAdmin(req.body);
            return res.status(200).json({
              success: true,
              message: "Registration completed successfully",
              admin,
            });
          } catch (err) {
            next(err);
          }


    },
    signIn:async(req,res,next)=>{
        let admin = await adminHelper.findAdminByEmail(req.body.email);
        //authenticating the user
        if (!admin || !admin.authenticate(req.body.password)) {
          return res.status(403).json({
            success: false,
            message: "Incorrect email or password",
          });
        }
    
        //creating user token
        adminKeys = {
          name: admin.name,
         
          email: admin.email,
          role: constants.ADMIN_ROLE,
        };
        const token = utils.createToken(adminKeys);
    
        //user response
        return res.status(200).json({
          success: true,
          message: "authenticated",
          token: token,
        });
    }
}