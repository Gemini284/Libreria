const express = require('express')
const router = express.Router()
const Autor= require('../models/autores')


//Obtener todos los autores 
router.get('/', (req, res) => {
    res.render('autores/index')
})


//nuevo autor
router.get('/new', (req,res) => {
    res.render('autores/new', { autor: new Autor()}) //Escribí 3 veces Author xDD
})

//Crea una ruta para el autor (por si tiene varios libros)
router.post('/', (req, res) => {
    res.send(req.body.nombre)
})

module.exports = router