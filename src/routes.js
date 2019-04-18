import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';

const Roles = lazy(() => import('./components/roles'));
const AddRole = lazy(() => import('./components/roles/add-role'));
const EditRole = lazy(() => import('./components/roles/edit-role'));
const DeleteRole = lazy(() => import('./components/roles/delete-role'));
const Section = lazy(() => import('./components/ready-components/section'));
const TreeControl = lazy(() =>
  import('./components/ready-components/tree-control')
);
const Map = lazy(() => import('./components/map'));
const Tabs = lazy(() => import('./components/ready-components/tabs'));

const Routes = (props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};

export default Routes;
