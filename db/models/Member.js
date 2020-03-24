const mongoose = require('../connection');

const MemberSchema = new mongoose.Schema({
  _id: { type: String },
  playerId: { type: String },
  playerName: { type: String },
  isGuildMember: { type: Boolean },
  dateJoined: { type: Date, default: Date.now },
  badMessages: [{ type: String, ref: 'BadMessage' }]
});

const Member = mongoose.model('Member', MemberSchema);

module.exports = Member;
