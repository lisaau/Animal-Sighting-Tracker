export function fetchSightings() {
    return fetch("/sightings")
    .then(res => res.json())
}

export function addSighting(animal_id, health, location, email) {
    return fetch("/sighting", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
        body: JSON.stringify({
            'animal_id': animal_id,
            'health': health,
            'location': location,
            'email': email
        })
    })
    .then(res => res.json())
    .then(res => {
        console.log('res of addsighting', typeof res, res);
        return res
    });
}

export function fetchAnimals() {
    return fetch("/animals")
    .then(res => res.json())
}