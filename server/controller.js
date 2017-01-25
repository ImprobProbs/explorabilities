const User = require('./db/users.js');

const controller = {
  users: {
    retrieve: (req, res, next) => {
      //retrieve user from DB
    },
    create: (req, res, next) => {
      //Create new user in DB
      console.log(req.body, ' post user name req');
    }
  }
};

module.exports = controller;
