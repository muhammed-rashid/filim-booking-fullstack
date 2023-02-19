const jwt = require("jsonwebtoken");
function userAuth(req, res, next) {
  //get token from request header
  const authHeader = req.headers["authorization"];
  const token = authHeader ? authHeader.split(" ")[1] : "";


  if (!token) return res.status(403).json({message:"unauthenticated"});

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      next(err)
    } else {
      req.user = user;
      next(); 
    }
  });
}
module.exports = userAuth;
