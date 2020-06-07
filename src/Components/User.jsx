import React from 'react';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, Typography} from '@material-ui/core';

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
    const [pastJobID, editPastJobID] = useState([1,4,6,8,23,45,68,69])
    const [pastJobType, editPastJobType] = useState(["proofreading", "translating", "translating", "proofreading","proofreading", "translating", "translating", "proofreading"]);
    
    //Current works of this user
    const [currentJobID, editCurrentJobID] = useState([71, 73]);
    const [currentJobType, editCurrentJobType] = useState(["proofreading", "translating"]);

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

        </div>
    
    
    )
}