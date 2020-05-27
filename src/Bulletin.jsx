import React from 'react';
import {useState} from 'react';
import CheckboxGroup from './CheckboxGroup';
import Box from '@material-ui/core/Box';

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


    return(
        <div>
            <CheckboxGroup fun={changeFilter}/>
            <Box color="primary.main">
                Hello!
            </Box>
        </div>
    );
};

