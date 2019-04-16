import React from 'react';
import { Route, Switch } from 'react-router';

import Roles from './components/roles';
import AddRole from './components/roles/add-role';
import EditRole from './components/roles/edit-role';
import DeleteRole from './components/roles/delete-role';
import Map from './components/map';
import Tabs from './components/ready-components/tabs';
import Section from './components/ready-components/section';
import TreeControl from './components/ready-components/tree-control';

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Roles} />
      <Route exact path="/add" component={AddRole} />
      <Route exact path="/edit" component={EditRole} />
      <Route exact path="/delete" component={DeleteRole} />
      <Route exact path="/map" component={Map} />
      <Route exact path="/tab" component={Tabs} />
      <Route exact path="/section" component={Section} />
      <Route exact path="/tree" component={TreeControl} />
    </Switch>
  );
};

export default Routes;
