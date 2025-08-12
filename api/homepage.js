const express = require('express');
const Profile = require('../models/Profile');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find({});
    if (!profiles || profiles.length === 0) {
      return res.status(404).json({ error: 'No profile data found' });
    }
    return res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ error: 'Server error while fetching profile data' });
  }
});

module.exports = router;
