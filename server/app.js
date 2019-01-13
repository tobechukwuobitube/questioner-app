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

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

process.on('exit', () => server.close())
process.on('SIGTERM', () => server.close())
process.on('uncaughtException', () => server.close())

module.exports = app;
