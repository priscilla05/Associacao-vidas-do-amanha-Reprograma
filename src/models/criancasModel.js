const mongoose = require ('mongoose')

const criancaSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    name:{
        type: String, 
        required: true,
        
    },

    cpf:{
        type: Number,
        required: true,
        unique: true
    },

    age:{
        type: Number,
        required: true,
        
    },

    gender:{
        type: String,
        default: "Não informado",   
    },
    situation:{
        type: Boolean,
        required: true,
        default: false

    }
    
},{timestamps:true})

const Model = mongoose.model('crianca',criancaSchema)

module.exports = Model
