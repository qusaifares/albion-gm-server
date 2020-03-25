const mongoose = require('../connection');

const MemberSchema = new mongoose.Schema({
  _id: { type: String },
  tagOnJoin: { type: String },
  playerId: { type: String, default: '' },
  playerName: { type: String, default: '' },
  isGuildMember: { type: Boolean, default: false },
  dateJoined: { type: Date, default: Date.now },
  badMessages: [{ type: String, ref: 'BadMessage' }]
});

const Member = mongoose.model('Member', MemberSchema);

module.exports = Member;
