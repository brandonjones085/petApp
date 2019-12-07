const express = require("express"); 
const router = express.Router(); 
const mongoose = require('mongoose').set('debug', true); 
const {ensureAuthenticated, ensureGuest} = require('../helpers/auth')
const Reminder = mongoose.model('reminder')

router.get('/', (req,res)=>{
    res.render('index/welcome')
})


router.get('/main', ensureAuthenticated, (req,res)=>{
    const id = req.user.id;
    console.log("Logging ID" + id)
    Reminder.find({"user": String(id)}, (err, re)=>{
        if(err){
            throw err;
        }else if(re){
            
            //profile found
            res.render('index/main', {
            re:re
            })
        }
        
    })

})
module.exports = router; 