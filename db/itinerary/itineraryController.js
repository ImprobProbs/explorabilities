const Itinerary = require('./itineraryModel.js');

const controller = {
  save: function(req, res, next) {
    console.log(req.body);
    console.log(req.body.itineraryID);
    console.log(req.body.placeIDs);

    
  },
  retreive: function(req, res, next) {

  }
};

module.exports = controller;
