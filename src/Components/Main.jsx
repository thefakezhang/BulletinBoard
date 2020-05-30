import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Bulletin from "./Bulletin";
import HomePage from "./HomePage";
import Progress from "./Progress";
import User from "./User";
import RoleList from "./RoleList";
import Identification from "./Identification";
import Walkthrough from "./Walkthrough";

export default () => {
    return(
        <div>
        <Switch>
            <Route exact path = "/" component = {HomePage}></Route>
            <Route exact path = "/home" component = {Bulletin}></Route>
            <Route exact path = "/progress" component = {Progress}></Route>
            <Route path = "/roles" component = {RoleList}></Route>
            <Route path = "/walkthrough" component = {Walkthrough}></Route>
            <Route path = "/user/:username" component = {User}></Route>
            <Route path = "/id/:id" component = {Identification}></Route>
        </Switch>
        </div>
        

    )

}