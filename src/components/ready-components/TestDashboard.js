import React, { useEffect, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'react-proptypes';
import { Route, Switch } from 'react-router';

import Header from '../header';
import { fetchRoles } from '../../actions/roles';
import '../../app.css';

const Roles = lazy(() => import('../roles'));
const AddRole = lazy(() => import('../roles/add-role'));
const EditRole = lazy(() => import('../roles/edit-role'));
const DeleteRole = lazy(() => import('../roles/delete-role'));
const Section = lazy(() => import('../ready-components/section'));
const Map = lazy(() => import('../map'));
const Tabs = lazy(() => import('../ready-components/tabs'));

const TestDashboard = (props) => {
  useEffect(() => {
    if (!props.roles.length) props.fetchRoles();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="workspace">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Roles} />
            <Route exact path="/add" component={AddRole} />
            <Route exact path="/edit" component={EditRole} />
            <Route exact path="/delete" component={DeleteRole} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/tab" component={Tabs} />
            <Route exact path="/section" component={Section} />
            <Route exact path="/help" render={() => <div>Help</div>} />
            <Route exact path="/settings" render={() => <div>Settings</div>} />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

TestDashboard.propTypes = {
  fetchRoles: PropTypes.func.isRequired,
  roles: PropTypes.array.isRequired,
};

export default connect(
  ({ users: { roles } }) => ({
    roles: roles.roles,
  }),
  {
    fetchRoles,
  }
)(TestDashboard);
