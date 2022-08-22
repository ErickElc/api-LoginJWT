const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({

    name: {type: String, required: true, minlength: 3, maxlength: 50},
    age: {type: Number, required: true, min: 11, maxlength: 130},
    email: {type: String, required: true, unique: true},
    password : {type: String, required: true, min: 6, maxlength: 100},
    createdDate: {type: Date, default: Date.now},
    admin: {type: Boolean, default: false}

})

const UserModel = mongoose.model('Users', UserSchema);


module.exports = UserModel;