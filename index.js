const express = require('express');
const db = require('./config/mongoose')
//Used for session cookie
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const passport = require('passport')
const passportLocal = require('./config/passport-local-strategy')
const MongoStore = require('connect-mongo');
const app = express();
const PORT = process.env.PORT || 3030;


app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

app.set('view engine','ejs')
app.set('views','./views')

app.use(session({
    name:'blogApp',
    secret:'changeLater',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/BlogAppDb' })
}
    ));
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/users',require('./routes/users'));

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
});