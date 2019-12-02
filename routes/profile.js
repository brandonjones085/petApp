const express = require("express"); 
const router = express.Router(); 
const {ensureAuthenticated, ensureGuest} = require('../helpers/auth')
const mongoose = require('mongoose').set('debug', true); 
const Profile = mongoose.model('profile')

router.get('/', ensureAuthenticated, (req,res)=>{
    const id = req.user.id; 
    console.log("LOGGING ID "+ id)
    Profile.findOne({user: String(id)}, (err, result)=>{
        if(err){
            throw err;
        }else if(result){
            
            //profile found
            res.render('profile/index', {
            result:result
            })
        }
        else{
            //id not found, sends to create new profile
            res.redirect('/profile/add')
        }
    })
   
})


//Create profile
router.get('/add', ensureAuthenticated, (req,res)=>{
    res.render('profile/add'); 
})

//edit profile
router.get('/edit', ensureAuthenticated, (req,res)=>{
    res.render('profile/edit'); 
})

router.post('/add', (req,res)=>{
    console.log(req.body)
    const newProfile = {
        numOfPets: req.body.numOfPets, 
        location: req.body.location,
        vetProvider: req.body.vetProvider, 
        user: req.user.id
    }

    new Profile(newProfile)
    .save()
    .then(profile=>{
        res.redirect('/profile/');
    })
})

module.exports = router; 