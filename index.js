const express = require('express');
const db = require('./config/mongoose')
const app = express();
const PORT = process.env.PORT || 3030;

app.set('view engine','ejs')
app.set('views','./views')

app.use(express.urlencoded({extended:true}));
app.use('/users',require('./routes/users'));

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
});