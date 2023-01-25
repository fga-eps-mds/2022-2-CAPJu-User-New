const swaggerUI = require('swagger-ui-express');
const express = require('express');
const cors = require('cors');
const swaggerFile = require('./swagger/swaggerfile');
const routes = require('./routes');


const app = express();

app.use(routes);
app.use('api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));

module.exports = app;