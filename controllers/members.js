const express = require('express');
const Member = require('../db/models/Member');
const router = express.Router();

router.get('/', async (req, res) => {
  const members = await Member.find({});
  res.json(members);
});

router.get('/:id', async (req, res) => {
  const member = await Member.findById(req.params.id).populate('badMessages');
  res.json(member);
});

router.post('/new', async (req, res) => {
  const member = await Member.create(req.body);
  res.json(member);
});

router.put('/:id/edit', async (req, res) => {
  const member = await Member.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { returnOriginal: false }
  );
  res.json(member);
});

module.exports = router;
