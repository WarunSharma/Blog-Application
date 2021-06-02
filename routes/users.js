const express = require('express');
const userControllers = require('../controllers/users_controller');
const passport = require('passport');

const router = express.Router();

router.get('/signup',userControllers.showSignUpPage);

router.get('/signin',userControllers.showSignInPage);
router.get('/',passport.checkAuthentication,(req,res)=>{
    res.render('success');
})

router.post('/signup',userControllers.signUp);

//router.post('/signin',userControllers.signIn);
router.post('/signin',passport.authenticate(
    'local',
    {failureRedirect:'/users/signup'},
),userControllers.signIn);

//router.post('/signin',userControllers.signIn);

router.get('/signout',userControllers.signOut)


module.exports = router;