const express = require('express');
const userControllers = require('../controllers/users_controller');

const router = express.Router();

router.get('/signup',userControllers.showSignUpPage);

router.get('/signin',userControllers.showSignInPage);

router.post('/signup',userControllers.signUp);

router.post('/signin',userControllers.signIn);

module.exports = router;