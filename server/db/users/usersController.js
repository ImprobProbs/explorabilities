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
        //First argument in jwt.sign is the 'payload' which is used when saving an itinerary for the user
        const token = jwt.sign({ user: user.email, id: user.id }, dbconfig.secret, {
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
        email: req.body.email
      },
      defaults: {
        password: password
      }
    }).spread(function(user, created) {
      if (created) {
        console.log('User was successfully created');
        const token = jwt.sign({ user: user.email, id: user.id }, dbconfig.secret, {
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

  },

  authenticate: function(req, res) {
    let token = req.headers.token;
    jwt.verify(token, dbconfig.secret, function(err, payload) {
      if (err) {
        res.status(403).send('Invalid authentication token');
      } else {
        res.status(200).send({user: payload.user, id: payload.id});
      }
    });
  }
};

module.exports = controller;
