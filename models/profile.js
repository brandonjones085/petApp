const mongoose = require("mongoose")
const Schema = mongoose.Schema; 

const ProfileSchema = new Schema({
    numOfPets: {
        type:String, 
        required: true
    }, 
    location: {
        type: String, 
        required: true
    }, 
    vetProvider: {
        type: String, 
        required: true
    }, 
    user:{
        type:Schema.Types.ObjectId, 
        ref:'users'
    }
  

}); 

//Create Collection and add Schema
mongoose.model('profile', ProfileSchema, 'profile')