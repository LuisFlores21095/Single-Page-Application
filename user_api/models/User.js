const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const bcrypt = require('bcrypt');

const registerSchema = mongoose.Schema({

     firstName:{
         type: String,
         required: true
             },

     lastName:{
        type: String,
        required: true
    },
    streetAddress:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    zipCode:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],

    },
    password: { type: String, required: true, minlength: [8, 'Username must be at least 8 characters.']
}
   



});

registerSchema.pre('save', function(next){
const user = this;
bcrypt.hash(user.password, 10, function(err,hash){
    if(err){
        return next(err);
    }
    user.password = hash;
 return next();
})

});

module.exports = mongoose.model('User', registerSchema);