const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const trxnSchema = new Schema({
	"user_id": String,
  "category": String,
  "subcategory": String,
  "amount": Number,
  "date": Date,
  "type": String
  // "foo": String
});

// Create the model class
// we tell mongoose that the userSchema correlates to the mongo collection called 'user'
const ModelClass = mongoose.model('trxn', trxnSchema);

// Export the model
module.exports = ModelClass;
