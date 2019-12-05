const mongoose = require('mongoose');
const db = require('./index.js');

const locationSchema = new mongoose.Schema({
  evendId: String,
  location_name: String,
  Address: {
    Address_1: String,
    Address_2: String,
    City: String,
    State: String,
    Zip: Number,
    Country: String
  },
  Geo: {
    Lat: Number,
    Long: Number
  },
  howToFindUs: String
})

const Location = mongoose.model('Location', locationSchema);


module.exports = Location;