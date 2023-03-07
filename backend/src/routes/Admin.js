const express = require('express');
const router = express.Router();
const {adminSignUpRequest} = require('../Requests/admin/signUpRequest');
const {adminSignInRequest} = require('../Requests/admin/signInRequest');
const {districtCreateRequest,districtUpdateRequest} = require('../Requests/admin/districtRequest');
const {theaterCreateRequest,theaterUpdateRequest} = require('../Requests/admin/theaterRequest');
const {screenCreateRequest,screenUpdateRequest} = require('../Requests/admin/screenRequest');
const validationRequest = require('../middlewares/validationErrors');
const {districtController} = require('../controllers/Admin/districtController')
const adminAuth = require("../middlewares/adminAuth");
//controllers
const authController = require('../controllers/Admin/authController')
const {dashboardController} = require('../controllers/Admin/dashboardController');
const {theaterController} = require('../controllers/Admin/theaterController.js')
const {screenController} = require('../controllers/Admin/screensController');
const { filimController } = require('../controllers/Admin/filmController');
const { filimCreateRequest } = require('../Requests/admin/filimRequest');

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

//screens
router.get('/screens',screenController.getAll)
router.get('/screen/:id',screenController.show)
router.post('/screen/create',adminAuth,screenCreateRequest,validationRequest,screenController.create)
router.post('/screen/update',adminAuth,screenUpdateRequest,validationRequest,screenController.update)
router.post('/screen/:id',screenController.delete)

// FILMS
router.get('/filims/:id', filimController.show)
router.get('/filims', filimController.getFilims)
router.post('/filims/create', filimCreateRequest , validationRequest, filimController.create)
router.post('/filims/update',filimCreateRequest,validationRequest, filimController.update)
router.post('/filims/delete', filimController.delete)


module.exports = router;