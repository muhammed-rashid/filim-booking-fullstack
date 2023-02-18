const User = require("../models/user");
module.exports.userHelper = {
  //FIND THE USER WITH EMAIL
  findUserByEmail: (email) => {
    return new Promise((resolve, reject) => {
      User.findOne({ email: email }, (err, result) => {
        if (!err) {
          resolve(result);
        }
      });
    });
  },

  //FIND THE USER WITH USERNAME
  findUserByUserName: (username) => {
    return new Promise((resolve, reject) => {
      User.findOne({ userName: username }, (err, result) => {
        if (!err) {
          resolve(result);
        }
      });
    });
  },

  //REGISTER NEW USER
  registerUser: ({ firstName, lastName, email, password, userName }) => {
    const _user = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      userName: userName,
    });

    return new Promise((resolve, reject) => {
      _user.save(function (err, user) {
        if (!err) {
          resolve({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            userName: user.userName,
          });
        }
        reject(err);
      });
    });
  },
};
