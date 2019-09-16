import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Cover from './components/cover/Cover';
import Login from './containers/auth/Login';
import Signup from './containers/auth/Signup';

export default props =>
    <Switch>
        <Route exact path='/' component={Cover}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Redirect from='*' to='/'/>
    </Switch>