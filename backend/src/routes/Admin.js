const express = require('express');
const router = express.Router();
const {adminSignUpRequest} = require('../Requests/admin/signUpRequest');
const {adminSignInRequest} = require('../Requests/admin/signInRequest');
const {districtCreateRequest,districtUpdateRequest} = require('../Requests/admin/districtRequest');
const validationRequest = require('../middlewares/validationErrors');
const {districtController} = require('../controllers/Admin/districtController')
const adminAuth = require("../middlewares/adminAuth");
//controllers
const authController = require('../controllers/Admin/authController')
const {dashboardController} = require('../controllers/Admin/dashboardController');

router.post('/sign-up',adminSignUpRequest,validationRequest,authController.signUp);
router.post('/sign-in',adminSignInRequest,validationRequest,authController.signIn);

//protected routes
router.get('/dashboard',adminAuth,dashboardController.index);

router.get('/districts',adminAuth,districtController.index)
router.post('/district/store',adminAuth,districtCreateRequest,validationRequest,districtController.create)
router.post('/district/update',adminAuth,districtUpdateRequest,validationRequest,districtController.update)
router.post('/district/:id',adminAuth,districtController.show);
router.delete('/district/:id',adminAuth,districtController.delete);



module.exports = router;