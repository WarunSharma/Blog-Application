const express = require('express');
const userControllers = require('../controllers/users_controller');

const router = express.Router();

router.get('/signup',userControllers.showSignUpPage);

router.get('/signin',userControllers.showSignInPage);

module.exports = router;