const express = require('express');
const BadMessage = require('../db/models/BadMessage');
const Member = require('../db/models/Member');
const router = express.Router();

// Get all bad messages
router.get('/', (req, res) => {
  BadMessage.find({}).then(messages => res.json(messages));
});

// Get all bad messages from a specific member
router.get('/member/:memberId', (req, res) => {
  BadMessage.find({ memberId: req.params.memberId }).then(messages =>
    res.json(messages)
  );
});

// Create a new bad message
router.post('/new', async (req, res) => {
  const message = await BadMessage.create(req.body);
  const author = await Member.findById(req.body.memberId);
  author.badMessages.push(message);
  author.save();
  res.json(message);
});

module.exports = router;
