import React from 'react';
import {useState} from 'react';
import CheckboxGroup from './CheckboxGroup';
import TabPanel from './TabPanel';
import RequestsItem from './RequestsItem';
import { Button } from '@material-ui/core'
import {Link} from 'react-router-dom';

export default () => {

    var divStyle = {
        overflowY: 'scroll', 
        overflowX: 'hidden', 
        height:'400px'
    }

    return(
        <div>
            <TabPanel></TabPanel>
        </div>
    );
};

