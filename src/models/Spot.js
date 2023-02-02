// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  empresa: String,
  valor: Number,
  tecnologia: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Spot', SpotSchema);
