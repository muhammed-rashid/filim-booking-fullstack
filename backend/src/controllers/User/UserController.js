const User = require("../../models/user");
const { userHelper } = require("../../helpers/userHelper");
const { constants } = require("../../constants/app");
const { utils } = require("../../utils/utils");

UserController = {
  signUp: async (req, res, next) => {
    try {
      var user = await userHelper.registerUser(req.body);
      return res.status(200).json({
        success: true,
        message: "Registration completed successfully",
        user,
      });
    } catch (err) {
      next(err);
    }
  },
  login: async (req, res) => {
    let user = await userHelper.findUserByEmail(req.body.email);
    //authenticating the user
    if (!user || !user.authenticate(req.body.password)) {
      return res.status(403).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    //creating user token
    userKeys = {
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      role: constants.USER_ROLE,
    };
    const token = utils.createToken(userKeys);

    //user response
    return res.status(200).json({
      success: true,
      message: "authenticated",
      token: token,
    });
  },
};

module.exports = UserController;
