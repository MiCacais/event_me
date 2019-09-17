import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Cover from './components/cover/Cover';
import Login from './containers/auth/Login';
import Signup from './containers/auth/Signup';
import Dashboard from './containers/dashboard/Dashboard';
import Create from './containers/dashboard/Create';
import Logout from './containers/auth/Logout';

export default props =>
    <Switch>
        <Route exact path='/' component={Cover}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/create' component={Create}/>
        <Route path='/logout' component={Logout}/>
        <Redirect from='*' to='/'/>
    </Switch>