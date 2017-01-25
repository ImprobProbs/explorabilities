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

// force: true will drop the table if it already exists
User.sync({force: true}).then(function () {
  return User.create({
    email: 'dthomasy@gmail.com',
    password: 'Young'
  });
});

module.exports = User;
