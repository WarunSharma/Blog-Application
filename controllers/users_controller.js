const User = require('../models/user');

module.exports.showSignInPage=function(req,res){
    res.render('../views/user_signin');
};

module.exports.showSignUpPage=function(req,res){
    res.render('../views/user_signup');
};

module.exports.signIn=function(req,res){
    res.send(`${req.body.email},${req.body.password}`);
};

module.exports.signUp=function(req,res){
    User.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    },(err,user)=>{
        if(err){
            console.log(`Error while User signup;${err}`);
        }
        res.send(user);
    })
    //res.send(`${req.body.username},${req.body.email},${req.body.password}`);
}