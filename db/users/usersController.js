const User = require('./usersModel.js');
const jwt = require('jsonwebtoken');
const dbconfig = require('../dbconfig.js');

const controller = {
  signin: function(req, res, next) {
    //Retrieve user from DB and authenticate
    User.findOne({
      where: {
        email: req.query.email
      }
    }).then(function(user) {
      if (user && User.validatePW(req.query.password, user.password)) {
        const token = jwt.sign({user: user.email}, dbconfig.secret, {
          expiresIn: 86400 // expires in 24 hours
        });

        return res.json({
          success: true,
          token: token
        });
      }
      return res.status(403).send('Invalid e-mail or password');
    });
  },
  create: function(req, res, next) {
    const password = User.generateHash(req.body.password);
    User.findOrCreate({
      where: {
        email: req.body.email,
        password: password
      }
    }).spread(function(user, created) {
      if (created) {
        console.log('User was successfully created');
        const token = jwt.sign({user: user.email}, dbconfig.secret, {
          expiresIn: 86400 // expires in 24 hours
        });

        return res.json({
          success: true,
          token: token
        });
      } else {
        return res.sendStatus(500);
      }
    }).catch(function(err) {
      if (err.original.code === '23505') {
        return res.status(403).send('That email address already exists, please login');
      }
      return res.sendStatus(500);
    });

  }
};

module.exports = controller;
