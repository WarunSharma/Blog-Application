const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');


passport.use(new LocalStrategy({
    usernameField:email
},{
    function(email,password,done){
        User.findOne({email:email},(err,user)=>{
            if(err){
                console.log('Error in finding user');
                return done(err);
            }

            if(!user && user.password!=password){
                return done(null,false);
            }

            return done(null,user);
        })
    }
}));

passport.serializeUser(function(user,done){
    done(null,user.id);
});

passport.deserializeUser(function(id,done){
    User.findById(id,(err,user)=>{
        if(err){
            console.log('error');
            return done(err);
        }
        done(null,user);
    })
});


module.exports=passport;