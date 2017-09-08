var express = require('express');
var jwt = require('express-jwt');
var router = express.Router();
var passport = require('passport');
var config = require('./../config/database');

/* Controllers */
var userCtrl = require('./../controller/userCtrl');
var expenseCtrl = require('./../controller/expenseCtrl');

/* Models */
var User = require('./../model/user');
var Expense = require('./../model/expense');

var auth = jwt({
  secret: config.secret,
  userProperty: 'payload'
});

/* Test api listing. */
router.get('/', (req, res) => {
  res.send({received:true,data:req.query});
  res.end();
});

/* ++Starting user related API(s) . */

router.post('/register', userCtrl.register);

router.post('/login', userCtrl.login);

router.get('/profile', auth, userCtrl.profileRead);

router.get('/users', userCtrl.allUsers);

/* --Ending user related API(s) . */

/* ++Starting expense related API(s) . */

router.post('/expense', auth, expenseCtrl.create);

// router.get('/expenses', auth, expenseCtrl.allExpenses);

router.get('/expense', auth, expenseCtrl.getExpense);

/* --Ending user related API(s) . */
module.exports = router;
