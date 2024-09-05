const mongoose = require('mongoose');

import mongoose from 'mongoose';

const animeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: String,
  year: Number,
  description: String,
  rating: Number,
});

const Movie = mongoose.model('Movie', animeSchema);
export default Anime;
