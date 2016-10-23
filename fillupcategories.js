var MongoClient = require('mongodb').MongoClient, assert = require('assert');

// Connection URL
const url = 'mongodb://52.205.251.79:27017/budget';
const categories = require('./categories')["data"]

MongoClient.connect(url, function(err, db) {
  var collection = db.collection("categories");
  collection.insert(categories, function(err, result){
    assert.equal(null, err);
    console.log(result);
  });
});
