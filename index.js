const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const membersController = require('./controllers/members');
const badMessagesController = require('./controllers/badMessages');

app.use('/api/members', membersController);
app.use('/api/badMessages', badMessagesController);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
