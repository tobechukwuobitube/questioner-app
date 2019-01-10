const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const meetupsRoutes = require('./routes/meetups');

app.use('./meetups', meetupsRoutes);

module.exports = app;