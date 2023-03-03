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
// router.get('/theater', (req, res) =>{
//     console.log("GET WORKING");
//     res.send("work it")
// })
router.post('/theater/create', theaterController.create)
router.post('/theater/delete', theaterController.delet)
router.post('/theater/update', theaterController.update)
router.get('/theater', theaterController.getTheater )


module.exports = router;