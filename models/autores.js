//A conectar con Moongose ;--;
const mongoose = require('mongoose')  //Aparentemente escribí esto mal en el pasado 

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports= mongoose.model('Autores', authorSchema)