const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  github_links:{
    type: String,
  },
  website_url:{
    type: String,
  },
}, { collection: 'Projects' });

module.exports = mongoose.model('Project', projectSchema); 