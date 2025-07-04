const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  role: String,
  battingStyle: String,
  bowlingStyle: String
});

module.exports = mongoose.model('Player', playerSchema);