# Explorabilities ![exp icon](https://github.com/dchang103/explorabilities/blob/master/public/exp-icon.png)

Plan your next vacation.

Find *your* places to eat, sleep and play.

## For industrious developers:

  * Clientside: React w/React Router
  * Serverside: Express/Node
  * Database: Postgres - [The Postgres app](https://postgresapp.com/) is highly recommended for testing purposes
  * ORM: Sequelize
  * db/dbconfig.js requires some finagling. [Create a role](https://www.postgresql.org/docs/8.1/static/sql-createrole.html) on your database that has superuser and login privileges.


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

- Search for your favorite vacation spot
- Checkout various points of interests with the Google Maps interface
- Add the park/museum/restaurant/club to your itinerary
- Save your itinerary for future access


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

  ~ npm install
  ~ npm run build
  ~ npm start
  
  * Download Postgres App from [postgresapp.com](https://postgresapp.com)
  * Create db user and update dbconfig.js with db user credentials
  * Start the Postgres db
  * Open app in the browser by running (https://localhost:3000)
```


## Contributing

See [CONTRIBUTING.md](https://github.com/ImprobProbs/explorabilities/blob/master/CONTRIBUTING.md) for contribution guidelines.
