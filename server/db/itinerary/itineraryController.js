const Itinerary = require('./itineraryModel.js');
const jwt = require('jsonwebtoken');
const dbconfig = require('../dbconfig.js');

const controller = {
  save: function(req, res, next) {
    const token = req.body.token;
    const placeIDs = req.body.placeIDs;
    const itineraryID = req.body.itineraryID;
    const payload = jwt.verify(token, dbconfig.secret);
    const itineraryItems = [];

    placeIDs.forEach(function(placeID) {
      itineraryItems.push({
        placeID: placeID,
        itineraryID: itineraryID,
        userId: payload.id
      });
    });

    Itinerary.bulkCreate(itineraryItems)
    .then(function() {
      return res.status(200).send('Itinerary successfully saved.');
    })
    .catch(function(err) {
      console.log(err, 'error creating itinerary');
      return res.sendStatus(500);
    });

  },
  retreive: function(req, res, next) {
    const token = req.body.token;
    const payload = jwt.verify(token, dbconfig.secret);
    res.sendStatus(200);
  }
};

module.exports = controller;
