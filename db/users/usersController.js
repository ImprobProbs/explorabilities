const User = require('./usersModel.js');

const controller = {
  signin: (req, res, next) => {
    //Retrieve user from DB and authenticate
    User.findOne({
      where: {
        email: req.query.email
      }
    }).then((user) => {
      console.log(User.validatePW(req.query.password, user.password));
      if (user && User.validatePW(req.query.password, user.password)) {
        return res.sendStatus(200);
      }
      return res.status(403).send('Invalid e-mail or password');
    });
  },
  create: (req, res, next) => {
    const password = User.generateHash(req.body.password);
    User.findOrCreate({
      where: {
        email: req.body.email,
        password: password
      }
    }).spread((user, created) => {

      if (created) {
        console.log('User was successfully created');
        return res.sendStatus(201);
      } else {
        return res.status(403).send('User taken');
      }
    });

    //catch error for user already exists
  }
};

module.exports = controller;
