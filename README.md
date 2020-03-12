# Animal Sighting Tracker

Full stack app from Techtonica's [PERN project assignment](https://github.com/Techtonica/curriculum/blob/master/projects/mern-pern-project.md) using Node, Express, Postgres, and React. 

## Set up:

#### Database:

1. Set up the database using PostgreSQL. Make sure you have [PostgreSQL](https://wiki.postgresql.org/wiki/Homebrew) installed, which can be installed using [homebrew](https://brew.sh/). Take the eventonica.sql file and restore the database by running:

   ```
   createdb animaltrackerdb
   psql animaltrackerdb < animaltrackerdb.sql 
   ```

#### Express server:

1. Start with `npm install` to install necessary dependencies in the 'express-backend' folder.
2. Run the Express server by running `node index.js`

#### React frontend:

1. Start with `npm install` to install necessary dependencies in the 'react-frontend' folder.
2. Run `npm start` to run the app



## How to run the app:

Once both servers are running (Express on port 3000 and React on 3001), open [http://localhost:3001](http://localhost:3001/) to view it in the browser.

