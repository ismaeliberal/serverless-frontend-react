import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './containers/NotFound/NotFound';
import Login from './containers/Login/Login';
import AppliedRoute from './components/AppliedRoute';
import Home from './containers/Home/Home';
import Signup from './containers/Signup/Signup';
import NewNote from './containers/NewNote/NewNote';
import Notes from './containers/Notes/Notes';


export default ({ childProps }) => (
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps} />
        <AppliedRoute path="/login" exact component={Login} props={childProps} />
        <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
        <AppliedRoute path="/notes/new" exact component={NewNote} props={childProps} />
        <AppliedRoute path="/notes/:id" exact component={Notes} props={childProps} />
        <Route component={NotFound} />
    </Switch>
);