import React from 'react';
import {Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Paper} from '@material-ui/core';

export default function DisplaySighting(props) {
    return(
        <div style={{padding: '5%'}}>
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Nickname</TableCell>
                        <TableCell align="right">Species</TableCell>
                        <TableCell align="right">Health</TableCell>
                        <TableCell align="right">Location</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.sightings.map(row => (
                        <TableRow key={row.nickname}>
                            <TableCell>{row.nickname}</TableCell>
                            <TableCell align="right">{row.common_name}</TableCell>
                            <TableCell align="right">{row.health}</TableCell>
                            <TableCell align="right">{row.location}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}