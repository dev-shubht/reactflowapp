const express = require('express');
const router = express.Router();
const Flow = require('../models/Flow');

router.post('/', async (req, res) => {
  try {
    const newFlow = new Flow(req.body);
    const saved = await newFlow.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const flows = await Flow.find({ userId: req.params.userId });
    res.json(flows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;