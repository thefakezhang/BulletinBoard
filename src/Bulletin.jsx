import React from 'react';
import {useState} from 'react';
import CheckboxGroup from './CheckboxGroup';

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
            <div id="" style="overflow-y:scroll; overflow-x:hidden; height:400px;">

            </div>
        </div>
    );
};

