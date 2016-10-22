var express = require('express');
var _ = require('lodash');

var app = express();
var transactions = require("./data/transactions").data

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  // response.render('pages/index');
  response.send("Hello Kangze");
});

app.get('/users/:userId', function(request, response) {
  user_transactions = _.filter(transactions, {user_id: request.params.userId});
  response.json(user_transactions);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
