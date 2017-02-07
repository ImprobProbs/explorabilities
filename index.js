const express = require('express');
const routes = require('./server/routes.js');
const app = express();
const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
  console.log('Request of type: ' + req.method + ', to: ' + req.url);
  next();
});

app.use(routes);

app.listen(port, () => {
  console.log('Listening on ' + port);
});
