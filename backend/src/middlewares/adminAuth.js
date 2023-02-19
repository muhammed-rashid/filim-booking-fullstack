const jwt = require("jsonwebtoken");
const { constants } = require("../constants/app");
function adminAuth(req, res, next) {
  //get token from request header
  const authHeader = req.headers["authorization"];
  const token = authHeader ? authHeader.split(" ")[1] : "";

  if (!token) return res.status(403).json({ message: "unauthenticated" });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      next(err);
    } else {
      if (user.role != constants.ADMIN_ROLE) {
        return res.status(403).json({ message: "unauthenticated" });
      }
      req.user = user;
      next();
    }
  });
}
module.exports = adminAuth;
