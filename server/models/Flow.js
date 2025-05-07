const mongoose = require('mongoose');

const NodeSchema = new mongoose.Schema({
  id: String,
  type: String, // send_email, wait, condition
  data: mongoose.Schema.Types.Mixed,
  next: [String] // next node ids (array for branching)
});

const FlowSchema = new mongoose.Schema({
  name: String,
  userId: mongoose.Schema.Types.ObjectId,
  nodes: [NodeSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Flow', FlowSchema);