const Sequelize = require('sequelize');
const db = require('../database.js');
const User = require('../users/usersModel.js');

const Itinerary = db.define('itinerary', {
  placeID: {
    type: Sequelize.STRING
  },
  itineraryID: {
    type: Sequelize.STRING
  },
  userId: {
    type: Sequelize.INTEGER,
    model: 'users',
    key: 'id'
  }
});

User.hasMany(Itinerary);

db.sync();

module.exports = Itinerary;
