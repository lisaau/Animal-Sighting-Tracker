import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';

import AddSightingForm from './components/AddSightingForm';
import DisplaySighting from './components/DisplaySighting';
import Banner from './components/Banner';

import {fetchSightings, fetchAnimals, addSighting} from "./api.js"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sightings: [],
      dropdown:[]
    }
  }

  componentWillMount() {
    fetchSightings().then((res) => this.setState({ sightings: res }));

    // Create dropdown based on the animals that exist in the database
    fetchAnimals().then((res)=> {
      let dropdown = [];
      res.map( animal => dropdown.push(Object.assign({}, {value:`${animal.animal_id}`, label:`${animal.nickname} - ${animal.common_name}`} )));
      this.setState({dropdown: dropdown});
    });
  }

  onAddSighting = async (animal_id, health, location, email) => {
    await addSighting(animal_id, health, location, email);
    let sightingsArray = await fetchSightings();
    this.setState({sightings: sightingsArray })
}

  render() {
    return (
      <Container maxWidth="md" style={{backgroundColor:'#F5F5F5'}}>
        <Banner />
        <div className="App">
          <AddSightingForm 
            onAddSighting={this.onAddSighting}
            dropdown={this.state.dropdown}
          />
          <DisplaySighting sightings={this.state.sightings}/>
        </div>
    </Container>
    );
  }
}

export default App;
