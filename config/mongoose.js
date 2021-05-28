const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/BlogAppDb');

const db = mongoose.connection;

db.on('error',()=>{
    console.log("Error while connecting to database")
});

db.once('open',()=>{
    console.log("Successfully connected to mongodb");
})

module.exports = db;