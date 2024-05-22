const express = require('express');
const bodyParser = require('body-parser');

const { apiRoutes} = require('./routers/index');

const app = express();
const apiBase = 'api/v1';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(apiBase, apiRoutes);

exports.app = app;