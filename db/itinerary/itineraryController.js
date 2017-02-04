const Itinerary = require('./itineraryModel.js');
const jwt = require('jsonwebtoken');
const dbconfig = require('../dbconfig.js');

const controller = {
  save: function(req, res, next) {
    const token = req.body.token;
    const placeIDs = req.body.placeIDs;
    const payload = jwt.verify(token, dbconfig.secret);
    const user = payload.user;

    placeIDs.forEach(function(placeID) {
      console.log(placeID);
    });

    // Itinerary.create({
    //   itineraryID: req.body.itineraryID,
    //   password: password
    // }).spread(function(user, created) {
    //   if (created) {
    //     console.log('User was successfully created');
    //     const token = jwt.sign({user: user.email}, dbconfig.secret, {
    //       expiresIn: 86400 // expires in 24 hours
    //     });
    //
    //     return res.json({
    //       success: true,
    //       token: token
    //     });
    //   } else {
    //     return res.sendStatus(500);
    //   }
    // }).catch(function(err) {
    //   if (err.original.code === '23505') {
    //     return res.status(403).send('That email address already exists, please login');
    //   }
    //   return res.sendStatus(500);
    // });

  },
  retreive: function(req, res, next) {

  }
};

module.exports = controller;
