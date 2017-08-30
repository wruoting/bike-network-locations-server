
// require('../models/network.js')

// var mongoose = require('mongoose');
// var read = require('read-file');
//var network = require('../models/network.js');
// import mongoose, { Schema } from 'mongoose';
import read from 'read-file';
import Network from '../models/network.js'

var buffer = read.sync('./seed/seed.txt',{encoding: 'utf8'});

//var uploadJSON = new network(buffer);

// var parsedJSON = JSON.parse(buffer);
//
// mongoose.connect('mongodb://localhost:27017', function(err, db) {
//   if(!err) {
//     console.log("We are connected");
//   }
// });
//
//
// //NetworkModel = new NetworkSchema(buffer)
//
// console.log(parsedJSON{0});
