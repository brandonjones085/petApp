const express = require("express"); 
const router = express.Router(); 
const {ensureAuthenticated, ensureGuest} = require('../helpers/auth')
const mongoose = require('mongoose').set('debug', true); 
const Reminder = mongoose.model('reminder')


router.get('/', ensureAuthenticated, (req,res)=>{
    res.render('reminder/index')

})

router.post('/', (req,res)=>{
    console.log(req.body)
    const newReminder = {
        reminder: req.body.reminder, 
       
        user: req.user.id
    }

    new Reminder(newReminder)
    .save()
    .then(reminder=>{
        res.redirect('../main');
    })
})




module.exports = router; 