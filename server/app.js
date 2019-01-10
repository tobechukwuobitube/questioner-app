const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const meetupRoutes = require('./routes/meetup');
const questionRoutes = require('./routes/question');
const userRoutes = require('./routes/user');

app.use(bodyParser.json());

app.use(meetupRoutes);
app.use(questionRoutes);
app.use(userRoutes);


app.get("/", (req, res) => { return res.json('Start with /users files') });

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

module.exports = app;
