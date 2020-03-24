const mongoose = require('../connection');

const BadMessageSchema = new mongoose.Schema({
  _id: { type: String },
  memberId: { type: String, ref: 'Member' },
  discordTag: { type: String },
  channel: { type: String },
  content: { type: String },
  datePosted: { type: Date, default: Date.now }
});

const BadMessage = mongoose.model('BadMessage', BadMessageSchema);

module.exports = BadMessage;
