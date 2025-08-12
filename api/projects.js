const express = require('express');
const Projects = require('../models/Projects');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.find({});
    if (!projects || projects.length === 0) {
      return res.status(404).json({ error: 'No project data found' });
    }
    return res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Server error while fetching project data' });
  }
});


module.exports = router;