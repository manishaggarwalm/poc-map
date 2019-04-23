import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'react-proptypes';

import Routes from './routes';
import { fetchRoles } from './actions/roles';
import './app.css';

const App = (props) => {
  useEffect(() => {
    if (!props.roles.length) props.fetchRoles();
  }, []);

  return <Routes />;
};

App.propTypes = {
  fetchRoles: PropTypes.func.isRequired,
  roles: PropTypes.array.isRequired,
};

export default connect(
  ({ users: { roles } }) => ({ roles: roles.roles }),
  { fetchRoles }
)(App);
