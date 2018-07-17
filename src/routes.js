import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';


const routes = (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/Wizard' component={Wizard} />
    </Switch>
)

export default routes;

