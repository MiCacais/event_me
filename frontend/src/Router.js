import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Cover from './components/cover/Cover';
import Login from './containers/auth/Login';
import Signup from './containers/auth/Signup';
import Dashboard from './containers/dashboard/Dashboard';
import Create from './containers/dashboard/Create';
import Logout from './containers/auth/Logout';
import View from './containers/dashboard/View';
import Edit from './containers/dashboard/Edit';

export default props =>
    <Switch>
        <Route exact path='/' component={Cover}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/create' component={Create}/>
        <Route path='/logout' component={Logout}/>
        <Route path='/view' component={View}/>
        <Route path='/edit' component={Edit}/>
        <Redirect from='*' to='/'/>
    </Switch>