const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller.js');
const routes = express();

//Parse incoming body
routes.use(bodyParser.urlencoded({extended: false}));
routes.use(bodyParser.json());

routes.use(express.static('../public'));

routes.get('/users', controller.users.retrieve);
routes.post('/users', controller.users.create);

module.exports = routes;
