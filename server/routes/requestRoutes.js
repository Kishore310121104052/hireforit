// server/routes/requestRoutes.js
const express = require('express');
const router = express.Router();
const Request = require('../models/Request');

router.post('/submit', async (req, res) => {
  try {
    const { name, phone, location, category } = req.body;
    const newRequest = new Request({ name, phone, location, category });
    await newRequest.save();
    res.status(200).json({ message: 'Request saved successfully' });
  } catch (error) {
    console.error('Error saving request:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
