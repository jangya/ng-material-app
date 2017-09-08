var passport = require('passport');
var mongoose = require('mongoose');
var Expense = require('./../model/expense');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.create = function(req, res) {
  // req.body = JSON.parse(req.body.toString());
  console.log("payload",req.payload);
  if(!req.body.name || !req.payload._id) {
    sendJSONresponse(res, 400, {
      "message": "Name is required"
    });
    return;
  }

  var expense = new Expense();

  expense.name = req.body.name;
  expense.type = req.body.type;
  expense.members = req.body.members;
  expense.details = req.body.details;
  expense.sharing = req.body.sharing;
  expense._userId = req.payload._id;

  expense.save(function(err,expenseRecord) {
    if (err) throw err;
    console.log(expenseRecord);
    res.status(200);
    res.json(expenseRecord);
  });

};
module.exports.getExpense = function(req, res) {
  console.log("payload",req.payload);
    if (!req.payload._id) {
      res.status(401).json({
        "message" : "UnauthorizedError: private profile"
      });
    } else {
      Expense
        .find({_userId:req.payload._id})
        .exec(function(err, expense) {
          res.status(200).json(expense);
        });
    }
  };
module.exports.allExpenses = function(req, res) {
  Expense.find()
    .then(function(doc){
      res.send(doc);
    });
};
