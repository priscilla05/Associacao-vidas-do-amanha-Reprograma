const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    nome: {type: String}, // required: true e tambem unique true
    email:{type: String}, //required: true e tambem unique
    senha:{type: String}, //required: true e tambem unique
},
{
    versionKey:false

})

const users = mongoose.model('users',usersSchema)

module.exports= users