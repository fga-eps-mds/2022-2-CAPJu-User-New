const express = require('express');
const router = express.Router();
const app = express();

app.use(router);

router.get('/', (request, response) => response.status(200).send({ message: 'Eae Rapaz!' }));

module.exports = app;