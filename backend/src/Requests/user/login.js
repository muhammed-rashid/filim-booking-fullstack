const { check } = require("express-validator");
const request = [
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Email is required").bail()
    .isEmail()
    .withMessage("Email should be a valid email").bail(),
    check("password")
    .exists({ checkFalsy: true })
    .withMessage("password is required").bail()
    .isLength({ min: 8 })
    .withMessage("password atleast contain 8 charecters").bail(),
];
module.exports.loginRequests = request;
