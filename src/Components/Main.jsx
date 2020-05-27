import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Bulletin from "./Bulletin";
//import App from "../App.js";

export default () => {
    return(
        <Switch>
            {/* <Route exact path = "/" component = {App}></Route> */}
            <Route exact path = "/home" component = {Bulletin}></Route>
        </Switch>

    )

}