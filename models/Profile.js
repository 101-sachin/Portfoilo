const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: String,
  title: String,
  intro: String,
  about: String,
  skills: Array,
  social_media: mongoose.Schema.Types.Mixed,
}, { collection: 'Profile' });

module.exports = mongoose.model('Profile', profileSchema); 