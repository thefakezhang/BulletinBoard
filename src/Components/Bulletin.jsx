import React from 'react';
import {useState} from 'react';
import CheckboxGroup from './CheckboxGroup';
import TabPanel from './TabPanel';
import { Button } from '@material-ui/core'

export default () => {
    //Corresponds to whether the user wants to see tasks for [Translator, Proofreader, Subber, Editor, Thumbnailer, QA]
    const [filter, setFilter] = useState([false, false, false, false, false, false]); 

    const changeFilter = (e) => {
        const index = parseInt(e.currentTarget.id);
        const temp = filter;
        temp[index] = !temp[index];
        setFilter(temp);
        //console.log(filter);
    }

    var divStyle = {
        overflowY: 'scroll', 
        overflowX: 'hidden', 
        height:'400px'
    }

    return(
        <div>
            <CheckboxGroup fun={changeFilter}/>
            <div id="" style={divStyle}>
            <Button> This is my first button</Button>
            <TabPanel></TabPanel>
            </div>
        </div>
    );
};

