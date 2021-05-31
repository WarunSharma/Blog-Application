const User = require('../models/user');

module.exports.showSignInPage=function(req,res){
    if(req.isAuthenticated())
        return res.redirect('/users');
    res.render('../views/user_signin');
};

module.exports.showSignUpPage=function(req,res){
    if(req.isAuthenticated())
        return res.redirect('/users');
    else    
        return res.render('../views/user_signup');
};

module.exports.signIn=function(req,res){
    res.redirect('/users');

    // if(req.cookies.user)
    //     return res.render('success');
    // else{
    //     User.findOne({email:req.body.email},(err,user)=>{
    //         if(err){
    //             res.render('error',{
    //                 errorSubject:'Error',
    //                 err:err
    //             })
    //         }
    
    //         if(user){
    //             if(user.password==req.body.password){
    //                 res.cookie('user',user.id);
    //                 res.send(`${user.username} Login`);
    
    //             }
    //             else{
    //                 res.render('error',{
    //                     errorSubject:'Wrong Password',
    //                     err:'Password entered is wrong',
    //                     signin:true
    //                 })
    //             }
    //         }
    //         else{
    //             res.render('error',{
    //                 errorSubject:'Unregistered mail',
    //                 err:'Email entered is wrong',
    //                 signin:false
    //             })
    //         }
    //     })
    // }    
    
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