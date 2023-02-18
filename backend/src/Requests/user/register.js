const { check } = require("express-validator");
const { userHelper } = require("../../helpers/userHelper");
const request = [
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email should be a valid email")
    .custom(async (value, { req }) => {
      return userHelper
        .findUserByEmail(value)
        .then((user) =>
          user ? Promise.reject("Email already exist") : Promise.resolve()
        );
    })
    .withMessage("Email address already take"),
  check("firstName")
    .exists({ checkFalsy: true })
    .withMessage("Firstname is required"),
  check("lastName")
    .exists({ checkFalsy: true })
    .withMessage("Lastname is required"),
  check("userName")
    .exists({ checkFalsy: true })
    .withMessage("Username is required")
    .custom((value) => {
      return userHelper
        .findUserByUserName(value)
        .then((user) => (user ? Promise.reject() : Promise.resolve()));
    })
    .withMessage("Username already taken"),
    check("password")
    .exists({ checkFalsy: true })
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password atleast contain 8 charecters"),
];
module.exports.registerRequests = request;
