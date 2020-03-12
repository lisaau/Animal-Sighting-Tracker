import React from 'react';
import logo from '../elephant.png';
import Grid from '@material-ui/core/Grid';

export default function Banner() {
    return(
        <Grid>
            <img src={logo} alt="site-logo" style={{width:'10%', paddingLeft: '45%', paddingTop: '5%'}}/>
            <h1 style={{textAlign: 'center'}}>Elephant Sighting Tracker</h1>
            <p style={{textAlign: 'center'}}>Help us track our elephant friends</p>
        </Grid>
    )
}