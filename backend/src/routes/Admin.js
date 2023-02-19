const express = require('express');
const router = express.Router();
const {adminSignUpRequest} = require('../Requests/admin/signUpRequest');
const {adminSignInRequest} = require('../Requests/admin/signInRequest');
const validationRequest = require('../middlewares/validationErrors');
const authController = require('../controllers/Admin/authController')

router.post('/sign-up',adminSignUpRequest,validationRequest,authController.signUp);
router.post('/sign-in',adminSignInRequest,validationRequest,authController.signIn);




module.exports = router;