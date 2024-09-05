const express = require('express');
const router = express.Router();
const Pelicula = require('../models/Pelicula');

// Obtener todas las películas
router.get('/', async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.json(peliculas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obtener una película por ID
router.get('/:id', getPelicula, (req, res) => {
  res.json(res.pelicula);
});

// Crear una nueva película
router.post('/', async (req, res) => {
  const pelicula = new Pelicula({
    titulo: req.body.titulo,
    director: req.body.director,
    genero: req.body.genero,
    año: req.body.año,
    calificacion: req.body.calificacion,
  });

  try {
    const nuevaPelicula = await pelicula.save();
    res.status(201).json(nuevaPelicula);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Middleware para obtener una película por ID
async function getPelicula(req, res, next) {
  let pelicula;
  try {
    pelicula = await Pelicula.findById(req.params.id);
    if (pelicula == null) {
      return res.status(404).json({ message: 'No se encontró la película' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.pelicula = pelicula;
  next();
}

module.exports = router;
