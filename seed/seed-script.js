
import mongoose, { Schema } from 'mongoose';
import read from 'read-file';
import Network from '../models/network.js'

var buffer = read.sync('./seed/seed.txt',{encoding: 'utf8'});

var parsedJSON = JSON.parse(buffer + "");

var uploadJSON = new Network(parsedJSON);

var savedJSON = uploadJSON.save();

// assert.ok(promise instanceof require('mpromise'));
//
// promise.then(function (doc) {
//   assert.equal(doc.name, "Guns N' Roses");
// });
