const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const db = require('./database.js');

const User = db.define('user', {
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

User.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

User.validatePW = (enteredPW, storedPW) => {
  return bcrypt.compareSync(enteredPW, storedPW)
};

User.sync({force: true}).then(function () {
  return User.create({
    email: 'dthomasy@gmail.com',
    password: bcrypt.hashSync('Young', bcrypt.genSaltSync(8))
  });
});

module.exports = User;
