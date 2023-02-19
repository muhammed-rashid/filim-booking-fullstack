const Admin = require("../models/admin");
module.exports.adminHelper = {
  //FIND THE USER WITH EMAIL
  findAdminByEmail: (email) => {
    return new Promise((resolve, reject) => {
      Admin.findOne({ email: email }, (err, result) => {
        if (!err) {
          resolve(result);
        }
      });
    });
  },

  

  //REGISTER NEW USER
  registerAdmin: ({ name,email, password}) => {
    const _admin = new Admin({
      name: name,
      email: email,
      password: password,

    });

    return new Promise((resolve, reject) => {
      _admin.save(function (err, user) {
        if (!err) {
          resolve({
            name: user.name,
            email: user.email,
            userName: user.userName,
          });
        }
        reject(err);
      });
    });
  },
};
