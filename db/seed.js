const members = require('./members.json');
const badMessages = require('./badMessages.json');

const Member = require('./models/Member');
const BadMessage = require('./models/BadMessage');

const seedData = () => {
  Member.deleteMany({}).then(() => {
    BadMessage.deleteMany({}).then(() => {
      Member.insertMany(members)
        .then(() => console.log('Seeded members.'))
        .then(() => {
          BadMessage.insertMany(badMessages).then(() =>
            console.log('Seeded bad messages.')
          );
        });
    });
  });
};

seedData();
