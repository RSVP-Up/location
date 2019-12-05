const express = require('express');
const db = require('../database/index.js');
let PORT = 4010;

let app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});