import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';

const Administration = lazy(() => import('./components/administration'));
const TestDashboard = lazy(() =>
  import('./components/ready-components/TestDashboard')
);

const Routes = (props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/administration" component={Administration} />
        <Route path="/" component={TestDashboard} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
