const mongoose = require("mongoose")
const Schema = mongoose.Schema; 

const ReminderSchema = new Schema({

    reminder: {
        type: String, 
        required: true
    }, 
    user:{
        type:Schema.Types.ObjectId, 
        ref:'users'
    }
  

}); 

//Create Collection and add Schema
mongoose.model('reminder', ReminderSchema, 'reminder')