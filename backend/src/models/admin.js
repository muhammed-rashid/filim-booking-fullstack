const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    
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
    profile_picture: { type: String },
  },
  { timestamps: true }
);

//virtuals
adminSchema.virtual('password').set(function(password){
    this.hash_password = bcrypt.hashSync(password,10);
});

//methods
adminSchema.methods = {
    authenticate:function(password){
        return bcrypt.compareSync(password,this.hash_password);
    }
}

module.exports = mongoose.model("Admin",adminSchema);