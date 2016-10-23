// get random integer from 0 to length
function getRandomInt(length) {
  min = Math.ceil(0);
  max = Math.floor(length);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomAmt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return 10 *(Math.floor(Math.random() * (max - min + 1)) + min);
}
function getRandomMonth() {
  min = Math.ceil(1);
  max = Math.floor(12);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomDay() {
  min = Math.ceil(1);
  max = Math.floor(28);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var MongoClient = require('mongodb').MongoClient, assert = require('assert');

// Connection URL
const url = 'mongodb://52.205.251.79:27017/budget';
const categories = require('./categories')["data"]

MongoClient.connect(url, function(err, db) {
  var collection = db.collection("trxn");

  var i = 0;
  transactions = []
  for(i=1;i<categories.length;i++){
    for(j=0;j<getRandomInt(10);j++){
      transactions.push({
        user_id: "1123481284405631",
        category: categories[i].category,
        subcategory: categories[i].subcategory[getRandomInt(categories[i].subcategory.length)],
        amount: getRandomAmt(10,50),
        date:  getRandomDay()+"-"+getRandomMonth()+"-2016",
        type: "expense"
      });
    }
  }
  for(j=0;j<getRandomInt(10);j++){
    transactions.push({
      user_id: "1123481284405631",
      category: categories[0].category,
      subcategory: categories[0].subcategory[getRandomInt(categories[0].subcategory.length)],
      amount: getRandomAmt(60,100),
      date:  getRandomDay()+"-"+getRandomMonth()+"-2016",
      type: "income"
    });
  }

  // console.log(transactions);

  collection.insert(transactions, function(err, result){
    assert.equal(null, err);
    console.log(result);
  });
});
