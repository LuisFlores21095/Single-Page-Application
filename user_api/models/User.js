const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const bcrypt = require('bcrypt');

const PostSchema = mongoose.Schema({

     FirstName:{
         type: String,
         required: true
             },

     LastName:{
        type: String,
        required: true
    },
    StreetAddress:{
        type: String,
        required: true
    },
    City:{
        type: String,
        required: true
    },
    State:{
        type: String,
        required: true
    },
    ZipCode:{
        type: Number,
        required: true
    },
    Email:{
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],

    },
    Password: { type: String, required: true }
   



});

PostSchema.pre('save', function(next){
const user = this;
bcrypt.hash(user.Password, 10, function(err,hash){
    if(err){
        return next(err);
    }
    user.Password = hash;
next();
})

});

module.exports = mongoose.model('Posts', PostSchema);