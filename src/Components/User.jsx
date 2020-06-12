import React from 'react';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  

export default (props) => {
    //All the job types that a user can take
    const [roles, editRoles] = useState(["Translator", "proofreader"]);

    //Past works of this user
    let createData = (id, roles) => {return {id, roles}}
    const [pastJobID, editPastJobID] = useState(
      [createData(1, ["proofreader"]),
      createData(2, ["translator", "proofreader"]),
      createData(3, ["translator"]),
      createData(7, ["proofreader"]),
      createData(9, ["translator", "proofreader", "QA"]),
      createData(21, ["translator", "QA"]),
      createData(135, ["proofreader", "QA"]) ]);
    
    //Current works of this user
    const [currentJobID, editCurrentJobID] = useState([71, 73]);
    const [currentJobType, editCurrentJobType] = useState(["proofreading", "translating"]);
    const useStyles = makeStyles({
      table: {
        minWidth: 650,
        maxWidth: 700,
        margin: '0 auto',
      },
    });
    const classes = useStyles();
    return(
        <div>
            <p>this is {props.match.params.username}'s user page</p>
            <div id="tags">
                Roles:{"\t"} 
                {roles.map(
                    (roleName) => {
                        return roleName + " "
                    }
                )}
            </div>

            <p>Currently working on: </p>

            <div>
              <p>Past Projects:</p>
              <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell align="right">Roles</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {pastJobID.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          <Link to = {"/id/" + row.id}>{row.id}</Link>
                        </TableCell>
                        <TableCell align="right">{row.roles}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer> 
            </div>
            
              
        </div>
    
    
    )
}