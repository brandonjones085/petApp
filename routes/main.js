const express = require("express"); 
const router = express.Router(); 
const {ensureAuthenticated, ensureGuest} = require('../helpers/auth')

router.get('/', (req,res)=>{
    res.render('index/welcome')
})


router.get('/main', ensureAuthenticated, (req,res)=>{
    res.render('index/main')
})

module.exports = router; 