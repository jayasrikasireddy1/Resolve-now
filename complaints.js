const express = require('express');
const router = express.Router();
const Complaint = require('../models/complaint');

// Submit a complaint
router.post('/', async (req, res) => {
  const complaint = new Complaint(req.body);
  await complaint.save();
  res.status(201).json(complaint);
});

// Get all complaints
router.get('/', async (req, res) => {
  const complaints = await Complaint.find();
  res.json(complaints);
});

module.exports = router;