import React from 'react';
import {TextField, MenuItem, Button} from '@material-ui/core/';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const health = [
    {
      value: 'Healthy',
      label: 'Healthy',
    },
    {
      value: 'Injured',
      label: 'Injured',
    },
    {
      value: 'Ill',
      label: 'Ill',
    }
];

export default class AddSightingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animal_id: '',
            location: '',
            health: '',
            email: '',
            dropdown:[]
        }
    }

    render() {
        return(
            <div style={{paddingTop: '2%'}}>
            <ValidatorForm 
                onSubmit={ e => {
                    e.preventDefault();
                    this.props.onAddSighting(
                        this.state.animal_id,
                        this.state.health,
                        this.state.location,
                        this.state.email
                    );
                }}
            >
                <div>
                    <TextField
                        style={{ margin: '1%', width: '30%' }}
                        required
                        id="standard-select-elephant"
                        select
                        label="Elephant"
                        onChange={e => this.setState({animal_id: e.target.value})}
                        >
                        {this.props.dropdown.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField 
                        required 
                        style={{ margin: '1%' }}
                        id="standard-required" 
                        label="Location" 
                        onChange={ e => this.setState({location: e.target.value})}/>
                    <TextField
                        required    
                        style={{ margin: '1%', width: '15%'}}
                        id="standard-select-health"
                        select
                        label="Health"
                        value={this.health}
                        onChange={e => this.setState({health: e.target.value})}
                        >
                        {health.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <br/>
                    <TextValidator 
                        style={{ margin: '1%', width: '315px' }}
                        id="standard-required" 
                        label="Email" 
                        helperText="Please input your email in case we need to contact you"
                        value={this.state.email}
                        validators={['isEmail']}
                        errorMessages={['Email is not Valid']}
                        onChange={ e => this.setState({email: e.target.value})}/>
                </div>
                    <Button variant="outlined" type='submit'>Add Sighting</Button>
            </ValidatorForm>
            </div>
        )
    }
}