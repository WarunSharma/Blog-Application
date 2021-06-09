const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('All Post');
})
router.post('/create',(req,res)=>{
    res.send('created');
})


module.exports = router;