const express = require('express');
const Member = require('../db/models/Member');
const router = express.Router();

router.get('/', async (req, res) => {
  const members = await Member.find({});
  res.json(members);
});

router.get('/:id', async (req, res) => {
  const member = await Member.find({ _id: req.params.id }).populate(
    'badMessages'
  );
  res.json(member);
});

router.post('/new', async (req, res) => {
  const member = await Member.create(req.body);
  res.json(member);
});

module.exports = router;
