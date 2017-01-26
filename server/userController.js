const User = require('./db/users.js');

const controller = {
  signin: (req, res, next) => {
    //Retrieve user from DB and authenticate
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then((user) => {
      if (user && User.validatePW(req.body.password, user.password)) {
        return res.sendStatus(200);
      }
      return res.sendStatus(403);
    });
  },
  create: (req, res, next) => {
    User.findOrCreate({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    }).spread((user, created) => {
      if (created) {
        console.log('User was successfully created');
        return res.sendStatus(201);
      } else {
        return res.status(403).send('User taken');
      }
    });
  }
};

module.exports = controller;
