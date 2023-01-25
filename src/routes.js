const express = require('express');
const app = express();
const router = express.Router();

module.exports = router;


app.get('/', (request, response) => response.status(200).send({ message: 'Eae Rapaz!' }));