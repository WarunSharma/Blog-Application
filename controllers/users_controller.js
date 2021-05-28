const User = require('../models/user');

module.exports.showSignInPage=function(req,res){
    res.render('../views/user_signin');
};

module.exports.showSignUpPage=function(req,res){
    res.render('../views/user_signup');
};

module.exports.signIn=function(req,res){
    User.findOne({email:req.body.email},(err,user)=>{
        if(err){
            console.log(`Error while fetching user data`);
        }

        if(user){
            if(user.password==req.body.password){
                res.send(`${user.username} Login`);
            }
            else{
                res.send(`Invalid password`);
            }
        }
        else{
            res.send(`Invalid user`);
        }
    })
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
        res.send(`${user.username} created`);
    })
}