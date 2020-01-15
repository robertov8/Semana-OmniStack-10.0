const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const { MONGO_URL } = require('./config');

const app = express();

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);
