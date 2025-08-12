const express = require('express');
const Profile = require('../models/Profile');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const profile = await Profile.findOne({}, { skills: 1, _id: 0 });
    if (!profile || !Array.isArray(profile.skills) || profile.skills.length === 0) {
      return res.status(200).json({ skills: [] });
    }
    return res.status(200).json({ skills: profile.skills });
  } catch (error) {
    res.status(500).json({ error: 'Server error while fetching skills data' });
  }
});

module.exports = router;
