require('express-async-errors');
const express = require('express');
const bodyParser = require('body-parser');

const { apiRoutes} = require('./routers/index');
const { GeneralMiddleware } = require('./middleware/general');

const { ErrorHandler, NotFoundHandler, DevLog } = GeneralMiddleware;
const app = express();
const apiBase = '/api/v1';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(DevLog);
app.use(apiBase, apiRoutes);

app.use(ErrorHandler);
app.use(NotFoundHandler);

exports.app = app;