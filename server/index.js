const express = require('express');
const bodyParser = require('body-parser');
let app = express();
// const db = require('../database/index.js');
let PORT = 3010;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});