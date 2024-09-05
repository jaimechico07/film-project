import AnimeModel from '../models/AnimeModel.js';



/**
 * Obtener todas los animes de la base de datos
 * 
 * @param {Object} req - El objeto de request de Express
 * @param {Object} res - El objeto de response de Express
 * @returns {Promise<void>} - El resultado de la promesa
 */
// Obtener todas los animes
export const getAllAnimes = async (req, res) => {
  try {
    /**
     * Obtener la lista de animes desde la base de datos
     */
    const animes = await AnimeModel.find();
    res.status(200).json(animes);
  } catch (error) {

    res.status(500).json({ message: error.message });
  }
};

/**
 * Crea un nuevo anime en la base de datos
 * 
 * @param {Object} req - El objeto de request de Express
 * @param {Object} res - El objeto de response de Express
 * @returns {Promise<void>} - El resultado de la promesa
 */

export const createAnime = async (req, res) => {
  const newAnime = new Movie(req.body);
  try {
    await newAnime.save();
    res.status(201).json(newAnime);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
