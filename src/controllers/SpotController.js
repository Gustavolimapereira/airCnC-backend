/* eslint-disable camelcase */
const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {

  async index(req, res) {
    const { tech } = req.query;
    const spots = await Spot.find({ tecnologia: tech });
    return res.json(spots);
  },

  async store(req, res) {
    const { filename } = req.file;
    const {
      empresa, valor, tecnologia,
    } = req.body;

    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: 'Usuario não encontrado' });
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      empresa,
      tecnologia: tecnologia.split(',').map((tech) => tech.trim()),
      valor,
    });

    return res.json(spot);
  },
};
