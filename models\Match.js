const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  date: Date,
  opponent: String,
  result: String
});

module.exports = mongoose.model('Match', matchSchema);