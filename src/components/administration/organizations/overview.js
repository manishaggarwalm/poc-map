import React from 'react';
import PropTypes from 'react-proptypes';
import { connect } from 'react-redux';

const Overview = (props) => (
  <div>
    <pre>{JSON.stringify(props.activeOrganization, undefined, 2)}</pre>
  </div>
);

Overview.propTypes = { activeOrganization: PropTypes.array };

export default connect(({ organizations: { activeOrganization } }) => ({
  activeOrganization,
}))(Overview);
