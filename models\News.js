const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: Date
});

module.exports = mongoose.model('News', newsSchema);
```
This is a basic setup for a professional website for the Pakistan Cricket Team. The frontend is built using React, and the backend is built using Node.js/Express. The database is MongoDB, and it includes models for players, matches, and news. The website has a beautiful frontend with a responsive design, and it includes features such as a homepage, players page, schedule page, and news page.