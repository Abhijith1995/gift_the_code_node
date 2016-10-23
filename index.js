var express = require('express');
var _ = require('lodash');
var moment = require('moment');
var bodyParser = require('body-parser')
var cors = require('cors');
var MongoClient = require('mongodb').MongoClient, assert = require('assert');

// Connection URL
const url = 'mongodb://52.205.251.79:27017/budget';
const dateFormat = "YYYY-MM-DD"
const collections = {
  users: "users",
  transactions: "trxn",
  categories: "categories",
}

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to db");

  app.get('/', function(request, response) {
    response.send("Hello, World !");
  });

  app.get('/transactions', function(request, response) {
    var collection = db.collection(collections.transactions);

    var filter_object = {
      user_id: request.query.userId,
    }
    // Allow for category wide search
    if(request.query.category){
      filter_object["category"] = request.query.category
    }
    // Allow for subcategory search
    if(request.query.category && request.query.subcategory){
      filter_object["subcategory"] = request.query.subcategory
    }

    // console.log(collection);
    collection.find(filter_object).toArray(function(err, transactions) {
      assert.equal(err, null);

      var user_transactions = _.filter(transactions, filter_object);

      if(request.query.fromDate && request.query.toDate){
        fromDate = moment(request.query.fromDate, dateFormat);
        toDate = moment(request.query.toDate, dateFormat);

        user_transactions = _.filter(user_transactions, function(transaction){
          return moment(transaction.date).isBetween(fromDate, toDate);
        });
      }
      response.json(user_transactions);
    });
  });

  app.get('/users/:userId', function(request, response){
    var filter_object = {
      user_id: request.params.userId
    }

    var users_collection = db.collection(collections.transactions);
    var categories_collection = db.collection(collections.categories);

    users_collection.find(filter_object).toArray(function(err, users) {
      var user = users[0];
      assert.equal(err, null);
      categories_collection.find({}).toArray(function(err, categories){
          user["categories"] = categories;
          response.send(user);
      });
    });
  });
});

var app = express();

app.use(cors());
app.use(bodyParser.json({type:'*/*'}));

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port ', app.get('port'));
});
