const express = require('express');
const router = express.Router();
const UserController = require('../controllers/User/UserController');
const {registerRequests} = require('../Requests/user/register');
const validationRequest = require('../middlewares/validationErrors');

router.post('/sign-up',registerRequests,validationRequest,UserController.signUp);

module.exports = router;