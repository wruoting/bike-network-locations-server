require('babel-core/register');
require('babel-polyfill');
// require('../models/network.js')

var mongoose = require('mongoose');
var read = require('read-file');
//var network = require('../models/network.js');
// import mongoose, { Schema } from 'mongoose';
// import read from 'read-file';
// import Network from '../models/network.js'

var buffer = read.sync('./seed/seed.txt',{encoding: 'utf8'});

//var uploadJSON = new network(buffer);

var parsedJSON = JSON.parse(buffer);

mongoose.connect('mongodb://localhost:27017', function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});

var NetworkSchema = mongoose.model('Network', {
  company: [String],
  href: String,
  id: String,
  location: {
    city: String,
    country: String,
    latitude: {
      type: Number,
      isRequired: true,
    },
    longitude: {
      type: Number,
      isRequired: true,
    },
  },
  name: {
    type: String,
    required: true,
  }
});

//NetworkModel = new NetworkSchema(buffer)

console.log(parsedJSON{0});
