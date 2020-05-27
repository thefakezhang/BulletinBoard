import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Bulletin from "./Bulletin";

export default () => {
    return(
        <Switch>
            <Route exact path = "/home" component = {Bulletin}></Route>
        </Switch>

    )

}