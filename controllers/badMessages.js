const express = require('express');
const BadMessage = require('../db/models/BadMessage');
const Member = require('../db/models/Member');
const router = express.Router();

// Get all bad messages
router.get('/', async (req, res) => {
  try {
    const messages = await BadMessage.find({});
    res.json(messages);
  } catch (err) {
    res.send(err);
  }
});

// Get all bad messages from a specific member
router.get('/member/:memberId', (req, res) => {
  try {
    BadMessage.find({ memberId: req.params.memberId }).then(messages =>
      res.json(messages)
    );
  } catch (err) {
    res.send(err);
  }
});

// Create a new bad message
router.post('/new', async (req, res) => {
  try {
    const message = await BadMessage.create(req.body);
    const author = await Member.findById(req.body.memberId);
    if (author) author.badMessages.push(message);
    author.save();
    res.json(message);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
