const mongoose = require ('mongoose')

const padrinhoSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    name:{
        type: String, 
        required: true,
        unique: true,
    },

    cpf:{
        type: Number,
        required: true,
        unique: true
    },

    telephone:{
        type: Number,
        required: true
    },

    endereco:{
        type: String,
        required: true
    }
    
}, {timestamps: true})


const Model = mongoose.model('padrinho',padrinhoSchema)

module.exports = Model
