const express = require('express');
const routes = require('./routes.js');
const app = express();
const port = process.env.PORT || 3000;

app.use(routes);

app.listen(port, () => {
  console.log('Listening on ' + port);
});
