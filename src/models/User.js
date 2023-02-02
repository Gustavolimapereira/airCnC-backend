// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
});

module.exports = mongoose.model('User', UserSchema);
