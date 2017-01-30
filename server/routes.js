const express = require('express');
const bodyParser = require('body-parser');
const userCtrl = require('../db/users/usersController.js');
const routes = express();

//Parse incoming body
routes.use(bodyParser.urlencoded({extended: false}));
routes.use(bodyParser.json());

routes.use(express.static('../public'));

routes.get('/users/signin', userCtrl.signin);
routes.post('/users/create', userCtrl.create);

module.exports = routes;
