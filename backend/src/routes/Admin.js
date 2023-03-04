const express = require('express');
const router = express.Router();
const {adminSignUpRequest} = require('../Requests/admin/signUpRequest');
const {adminSignInRequest} = require('../Requests/admin/signInRequest');
const {districtCreateRequest,districtUpdateRequest} = require('../Requests/admin/districtRequest');
const {theaterCreateRequest,theaterUpdateRequest} = require('../Requests/admin/theaterRequest');
const validationRequest = require('../middlewares/validationErrors');
const {districtController} = require('../controllers/Admin/districtController')
const adminAuth = require("../middlewares/adminAuth");
//controllers
const authController = require('../controllers/Admin/authController')
const {dashboardController} = require('../controllers/Admin/dashboardController');
const {theaterController} = require('../controllers/Admin/theaterController.js')

router.post('/sign-up',adminSignUpRequest,validationRequest,authController.signUp);
router.post('/sign-in',adminSignInRequest,validationRequest,authController.signIn);

//protected routes
router.get('/dashboard',adminAuth,dashboardController.index);

router.get('/districts',adminAuth,districtController.index)
router.post('/district/store',adminAuth,districtCreateRequest,validationRequest,districtController.create)
router.post('/district/update',adminAuth,districtUpdateRequest,validationRequest,districtController.update)
router.post('/district/:id',adminAuth,districtController.show);
router.delete('/district/:id',adminAuth,districtController.delete);
//teater
router.post('/theater/create',adminAuth,theaterCreateRequest,validationRequest, theaterController.create)
router.get('/theater/:id',adminAuth,theaterController.show)
router.post('/theater/update',adminAuth,theaterUpdateRequest,validationRequest, theaterController.update)
router.post('/theater/delete',adminAuth, theaterController.delete)
router.get('/theaters',adminAuth, theaterController.getTheater )


module.exports = router;