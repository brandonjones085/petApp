const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const UserSchema = new Schema({
 googleID:{
    type:String, 
    require: true
 }, 
    email: {
        type: String, 
        required: true
    }, 
    firstName: {
        type: String
    }, 
    lastName: {
        type: String
    }

}); 

//Create Collection and add Schema
mongoose.model('users', UserSchema)