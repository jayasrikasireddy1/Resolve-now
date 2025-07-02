const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  status: { type: String, default: 'Pending' },
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Complaint', complaintSchema);