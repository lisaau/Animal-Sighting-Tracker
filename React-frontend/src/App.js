import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';

import AddSightingForm from './components/AddSightingForm';
import DisplaySighting from './components/DisplaySighting';
import Banner from './components/Banner';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sightings: [],
      dropdown:[]
    }
  }

  fetchSightings() {
    return fetch("/sightings")
    .then(res => res.json())
    .then(res => {
      console.log('res of fetchSightings', typeof res, res);
      this.setState({ sightings: res })
    });
  }

  addSighting(animal_id, health, location, email) {
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

  // Dynamically generates dropdown based on the animals in DB
  fetchAnimalsForDropdown() {
    let dropdown = [];
    return fetch("/animals")
    .then(res => res.json())
    .then(res => {
      console.log('res of animals', typeof res, res);
      res.map( animal => dropdown.push(Object.assign({}, {value:`${animal.animal_id}`, label:`${animal.nickname} - ${animal.common_name}`} )));
      this.setState({dropdown: dropdown});
    });
  }

  componentWillMount() {
    this.fetchSightings();
    this.fetchAnimalsForDropdown();
  }


  render() {
    return (
      <Container maxWidth="md" style={{backgroundColor:'#F5F5F5'}}>
        <Banner />
        <div className="App">
          <AddSightingForm 
            onAddSighting={(animal_id, health, location, email) => {
              this.addSighting(animal_id, health, location, email).then(() => this.fetchSightings())
            }}
            dropdown={this.state.dropdown}
          />
          <DisplaySighting sightings={this.state.sightings}/>
        </div>
    </Container>
    );
  }
}

export default App;
