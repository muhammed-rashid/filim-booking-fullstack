const express = require('express');
const router = express.Router();
const UserController = require('../controllers/User/UserController');
const {registerRequests} = require('../Requests/user/register');
const validationRequest = require('../middlewares/validationErrors');
const { loginRequests } = require('../Requests/user/login');
const { theaterController } = require("../controllers/Admin/theaterController")
const userAuth = require('../middlewares/userAuth')
router.post('/sign-up',registerRequests,validationRequest,UserController.signUp);
router.post('/sign-in',loginRequests,validationRequest,UserController.login);
router.post('/welcome',userAuth,(req,res)=>{
    res.send(req.user)
});
router.get("/theaters",theaterController.getTheater)


module.exports = router;