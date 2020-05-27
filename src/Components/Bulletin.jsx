import React from 'react';
import {useState} from 'react';
import CheckboxGroup from './CheckboxGroup';
import TabPanel from './TabPanel';
import { Button } from '@material-ui/core'

export default () => {
    //Corresponds to whether the user wants to see tasks for [Translator, Proofreader, Subber, Editor, Thumbnailer, QA]

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

