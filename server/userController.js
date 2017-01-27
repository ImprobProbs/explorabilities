const User = require('./db/users.js');

const controller = {
  signin: (req, res, next) => {
    //Retrieve user from DB and authenticate
    User.findOne({
      where: {
        email: req.query.email
      }
    }).then((user) => {
      console.log(req.query.password);
      console.log(user.password);
      if (user && User.validatePW(req.query.password, user.password)) {
        return res.sendStatus(200);
      }
      return res.status(403).send('Invalid e-mail or password');
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
