const express = require('express')
const router = express.Router(); 
const passport = require("passport")


router.get('/google', passport.authenticate('google', 
{scope:['profile', 'email'] })) 


router.get('/google/callback', 
passport.authenticate('google', {falureRedirect: 
'/login'}), 
(req,res)=>{

    //successful authentication to main page
    res.redirect('/main'); 
}
)

router.get('/verify', (req, res)=>{
    if(req.user){
        console.log(req.user)
    }
    else{
        console.log("NOT AUTH")
    }
})

router.get('/logout', (req, res)=>{
    req.logout(); 
    res.redirect('/')
})




module.exports = router; 