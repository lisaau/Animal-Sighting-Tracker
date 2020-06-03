# Animal Sighting Tracker

Full stack app from Techtonica's [PERN project assignment](https://github.com/Techtonica/curriculum/blob/master/projects/mern-pern-project.md) using Node, Express, Postgres, and React. This app was designed and implemented from scratch in two days.

<img src="/assets/animal-tracker-preview.png" alt="animal-tracker-preview" style="zoom:50%;" />



## Project Design

### Features/Requirements

- Show a list of all sightings of the animal sighted
- Form to add new sighting record 

As a bonus, I decided to focus on the user experience and user interface. I used [Material UI](https://material-ui.com/) to style app.



### Data Modeling:

There is a one-to-many relationship between the animals and sightings entities as well as the species and animals entities.

[Data schema](https://github.com/lisaau/Animal-Sighting-Tracker/wiki/Schema)



## Set up:

#### Database:

1. Set up the database using PostgreSQL. Make sure you have [PostgreSQL](https://wiki.postgresql.org/wiki/Homebrew) installed, which can be installed using [homebrew](https://brew.sh/). To get the database set up, take the `animaltrackerdb.sql` file and restore the database by running:

   ```
   createdb animaltrackerdb
   psql animaltrackerdb < animaltrackerdb.sql 
   ```

#### Express server:

1. Start with `npm install` to install necessary dependencies in the "express-backend" folder.
2. Run the Express server by running `node index.js`

#### React frontend:

1. Start with `npm install` to install necessary dependencies in the 'react-frontend' folder.
2. Run `npm start` to run the app



## How to run the app locally:

Once both servers are running (Express on port 3000 and React on 3001), open [http://localhost:3001](http://localhost:3001/) to view it in the browser.



## Future Features

- Sorting the data in each column of the table
- Pagination for data table
- Visualization of the data