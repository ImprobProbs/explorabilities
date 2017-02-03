const Itinerary = require('./itineraryModel.js');

const controller = {
  save: function(req, res, next) {
    console.log(req.body);
  },

  retreive: function(req, res, next) {

  }
};

module.exports = controller;
