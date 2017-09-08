var passport = require('passport');
var mongoose = require('mongoose');
var User = require('./../model/user');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.register = function(req, res) {
  // req.body = JSON.parse(req.body.toString());
  if(!req.body.firstName || !req.body.email || !req.body.password) {
    sendJSONresponse(res, 400, {
      "message": "All fields required"
    });
    return;
  }

  var user = new User();

  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.username = req.body.username;
  user.email = req.body.email;

  user.setPassword(req.body.password);

  user.save(function(err) {
    if (err) throw err;
    var token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token" : token
    });
  });

};

module.exports.login = function(req, res) {
  // console.log("inside User Ctrl",req.body);
  if(!req.body.email || !req.body.password) {
    sendJSONresponse(res, 400, {
      "message": "All fields required"
    });
    return;
  }

  passport.authenticate('local', function(err, user, info){
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      console.log(user);
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);

};

module.exports.profileRead = function(req, res) {
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(req.payload._id)
      .select('id firstName email username lastName')
      .exec(function(err, user) {
        res.status(200).json(user);
      });
  }
};

module.exports.allUsers = function(req, res) {
  User.find()
    .then(function(doc){
      res.send(doc);
    });
};
