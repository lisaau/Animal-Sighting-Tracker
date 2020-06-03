const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

/*---------- database ----------*/
const pgp = require('pg-promise')(/* options */)
const db = pgp("postgres://tpl619_2@localhost:5432/animaltrackerdb");


/*---------- API endpoints ----------*/
// gets JSON of all species from db (array of species)
app.get('/species', async (req, res) => {
    let species = await db.any('SELECT * FROM species');
    return res.status(200).send(species);
})

// gets all animals with its species information (for animal dropdown in UI)
app.get('/animals', async (req, res) => {
    let animals = await db.any(
        `SELECT * FROM animals AS a
        INNER JOIN species AS s
        ON a.species_id = s.species_id
        ORDER BY s.common_name`
    );
    return res.status(200).send(animals);
})

// return sightings with animal and species information
app.get('/sightings', async (req, res) => {
    let sightings = await db.any(
        `SELECT * FROM sightings AS s
        INNER JOIN animals AS a
        ON s.animal_id = a.animal_id
        INNER JOIN species AS sp 
        ON sp.species_id = a.species_id 
        ORDER BY s.sighting_id`
    );
    return res.status(200).send(sightings);
})

// adds a sighting, returns the row of information related to the sighting
// health, location, email are strings; animal_id is number
app.post('/sighting', async (req, res) => {
    let { health, location, email, animal_id } = req.body
    let sighting = await db.one(
        `INSERT INTO sightings (health, location, email, animal_id)
        VALUES($1, $2, $3, $4)
        RETURNING *`,
        [health, location, email, animal_id]
    );
    return res.status(200).send(sighting);
})


app.listen(port, () => console.log(`Listening on port ${port}!`))