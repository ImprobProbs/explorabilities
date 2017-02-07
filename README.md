# Explorabilities ![exp icon](https://github.com/dchang103/explorabilities/blob/master/public/exp-icon.png)

Plan your next vacation.

Find *your* places to eat, sleep and play.

## For industrious developers:

  * Clientside is done in React.
  * Serverside is done in Express/Node.
  * Used Sequelize as ORM
  * Database is handled by Postgres. [The Postgres app](https://postgresapp.com/) is highly recommended for testing purposes.
  * db/dbconfig.js requires some finagling. [Create a role](https://www.postgresql.org/docs/8.1/static/sql-createrole.html) on your database that has superuser and login privileges.


> Explorabilities project description

## Team

  - __Product Owner__: David Chang
  - __Scrum Master__: Derek Young
  - __Development Team Members__: Tenzin Sonam

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> Some usage instructions

## Requirements

- React
- React Router
- Node 4.10.x
- Express 2.6.x
- Postgresql 9.5.x
- Sequelize
- Google Map API

## Development

### Installing Dependencies

From within the root directory:

```sh

  * npm install
  * On the root folder, do npm start (to run the webpack)
  * On the server folder, run nodemon server.js (to start the server)
  * Download Postgres App from [postgresapp.com](https://postgresapp.com)
  * Create db user and update dbconfig.js with db user credentials
  * Start the Postgres db
  * Open app in the browser by running (https://localhost:3000)
```


## Contributing

See [CONTRIBUTING.md](https://github.com/ImprobProbs/explorabilities/CONTRIBUTING.md) for contribution guidelines.
