const { check } = require("express-validator");

const request = [
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email should be a valid email"),
    
   
    check("password")
    .exists({ checkFalsy: true })
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password atleast contain 8 charecters"),
];
module.exports.adminSignInRequest = request;
