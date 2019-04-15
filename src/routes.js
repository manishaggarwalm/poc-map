import React from 'react';
import { Route, Switch } from 'react-router';

import Roles from './components/roles';
import AddRole from './components/roles/add-role';
import EditRole from './components/roles/edit-role';
import DeleteRole from './components/roles/delete-role';
import Map from './components/map';

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={Roles} />
      <Route exact path="/add" component={AddRole} />
      <Route exact path="/edit" component={EditRole} />
      <Route exact path="/delete" component={DeleteRole} />
      <Route exact path="/map" component={Map} />
    </Switch>
  );
};

export default Routes;
