var express = require('express');
var _ = require('lodash');
var moment = require('moment');
var bodyParser = require('body-parser')
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();

const transactions = require("./data/transactions").data
const Trxn = require('./models/trxn_model');

const dateFormat = "YYYY-MM-DD"

mongoose.connect("52.205.251.79:27017/budget");

app.use(cors());
app.use(bodyParser.json({type:'*/*'}));

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  Trxn.find({}, function(err, transactions){
    response.send(transactions);
  });

  // response.render('pages/index');
  // response.send("Hello Kangze");
});

app.get('/:userId/transactions', function(request, response) {

  let filter_object = {
    user_id: request.params.userId,
  }
  // Allow for category wide search
  if(request.query.category){
    filter_object["category"] = request.query.category
  }
  // Allow for subcategory search
  if(request.query.category && request.query.subcategory){
    filter_object["subcategory"] = request.query.subcategory
  }

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

app.listen(app.get('port'), function() {
  console.log('Node app is running on port ', app.get('port'));
});
