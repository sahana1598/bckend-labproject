const mongoose = require('mongoose');
const Schema =  mongoose.Schema
const userSchema = new Schema({
    date:{
        type:Date
    },
    fname:
    {
        type: String,
        required: true,

    },email:
    {
        type: String,
        required: true,
        // minlength: 3,
        // maxlength: 20

    },password:
    {
        type: String,
        required: true,
        // minlength: 3,
        // maxlength: 20

    },role:
    {
        type: String,
        required: true,
        // minlength: 3,
        // maxlength: 20
    },sampleId:{
        type:Number
    },
    haemotology:
        {
        type:Object
    },
    thyroid:{
        type:Object
    },
    glucometry:{
        type:Object
    }
})
module.exports=mongoose.model('users',userSchema)