import React from 'react';
import {useState} from 'react';
import CheckboxGroup from './CheckboxGroup';
import TabPanel from './TabPanel';
import { Button } from '@material-ui/core'
import {Link} from '@material-ui/core';

export default () => {

    var divStyle = {
        overflowY: 'scroll', 
        overflowX: 'hidden', 
        height:'400px'
    }

    return(
        <div>
            <TabPanel></TabPanel>
            <Link to ="/">Home</Link>
        </div>
    );
};

