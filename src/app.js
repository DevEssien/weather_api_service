require('express-async-errors');
const express = require('express');
const bodyParser = require('body-parser');

const { apiRoutes} = require('./routers/index');
const { GeneralMiddleware } = require('./middleware/general');
const { Cache } = require('./database/repositories/cache.repo');

const { ErrorHandler, NotFoundHandler, DevLog } = GeneralMiddleware;
const app = express();
const apiBase = '/api/v1';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(DevLog);
app.use(apiBase, apiRoutes);

app.use(ErrorHandler);
app.use(NotFoundHandler);

// async function run() {
//   const result = await Cache.deleteData('/portharcourt,nigeria@c0004b1d98e598127f787c287aaf7c0db94454f1', );
//   console.log('result ', result);
// }
// run()

exports.app = app;