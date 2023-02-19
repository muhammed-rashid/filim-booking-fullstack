const jwt = require("jsonwebtoken")
module.exports.utils = {
    createToken : (data) =>{
        const token = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET);
        return token;
    }
}