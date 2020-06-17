import React from 'react';
import {useState} from 'react';
import CheckboxGroup from './CheckboxGroup';
import TabPanel from './TabPanel';
import RequestsItem from './RequestsItem';
import { Button } from '@material-ui/core'
import {Link} from 'react-router-dom';
import BulletinItem from './BulletinItem';

export default () => {

    var divStyle = {
        overflowY: 'scroll', 
        overflowX: 'hidden', 
        height:'400px'
    }

    return(
        <div>
            <TabPanel></TabPanel>
            <BulletinItem></BulletinItem>
        </div>
    );
};

