const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var csvController = require('./controllers/csvController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4201' }));

app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/csv', csvController);