const mongoose = require ('mongoose')

const feiraSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    itens:{
        type: Array, 
        required: true,
     
    }
    }, {timestamps:true})

    const Model = mongoose.model('feira',feiraSchema)
    
    module.exports = Model
    
