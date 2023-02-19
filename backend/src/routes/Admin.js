const express = require('express');
const router = express.Router();
const {adminSignUpRequest} = require('../Requests/admin/signUpRequest');
const {adminSignInRequest} = require('../Requests/admin/signInRequest');
const validationRequest = require('../middlewares/validationErrors');
const adminAuth = require("../middlewares/adminAuth");
//controllers
const authController = require('../controllers/Admin/authController')
const {dashboardController} = require('../controllers/Admin/dashboardController');

router.post('/sign-up',adminSignUpRequest,validationRequest,authController.signUp);
router.post('/sign-in',adminSignInRequest,validationRequest,authController.signIn);

//protected routes
router.get('/dashboard',adminAuth,dashboardController.index);


module.exports = router;