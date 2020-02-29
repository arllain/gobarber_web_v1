import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact componenet={SignIn} />
      <Route path="/register" componenet={SignUp} />
      <Route path="/dashboard" componenet={Dashboard} />
      <Route path="/profile" componenet={Profile} />
    </Switch>
  );
}
