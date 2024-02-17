const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const errorHandler = require('./errorHandler');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'API is active!',
  });
});

app.use('/', api);

app.use(errorHandler.notFound);
app.use(errorHandler.errorHandler);

module.exports = app;