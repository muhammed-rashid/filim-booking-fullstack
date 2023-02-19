const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
      index: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      index: true,
      lowercase: true,
      unique: true,
    },
    hash_password: {
      type: String,
      required: true,
    },
    contact: { type: String },
    profile_picture: { type: String },
  },
  { timestamps: true }
);

//virtuals
userSchema.virtual('password').set(function(password){
    this.hash_password = bcrypt.hashSync(password,10);
});

//methods
userSchema.methods = {
    authenticate:function(password){
        return bcrypt.compareSync(password,this.hash_password);
    }
}

module.exports = mongoose.model("User",userSchema);