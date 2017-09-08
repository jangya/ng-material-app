// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('./../config/database');
// create a schema
var expenseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  _userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: [true, 'User is missing.']
  },
  type: {
    type: String,
    enum: ['CR', 'DM', 'ST'],
    required: [true, 'Expense type is missing.']
  },
  members: [Schema.Types.Mixed],
  details: String,
  sharing: Boolean,
  created_at: Date,
  updated_at: Date
});

expenseSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});
// the schema is useless so far
// we need to create a model using it
var Expense = mongoose.model('Expense', expenseSchema);

// make this available to our users in our Node applications
module.exports = Expense;
