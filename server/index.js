const express = require('express');
const bodyParser = require('body-parser');
let app = express();
const db = require('../database/inex.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());