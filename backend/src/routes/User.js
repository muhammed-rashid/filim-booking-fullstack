const express = require('express');
const router = express.Router();
const UserController = require('../controllers/User/UserController');
const {registerRequests} = require('../Requests/user/register');
const validationRequest = require('../middlewares/validationErrors');
const { loginRequests } = require('../Requests/user/login');

router.post('/sign-up',registerRequests,validationRequest,UserController.signUp);
router.post('/sign-in',loginRequests,validationRequest,UserController.login);

module.exports = router;