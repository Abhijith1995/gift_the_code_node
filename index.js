var express = require('express');
var app = express();
var transactions = require("./data/transactions").data

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  // response.render('pages/index');
  response.json(transactions);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
