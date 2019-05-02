import React from 'react';
import PropTypes from 'react-proptypes';
import { connect } from 'react-redux';
import TreeControl from '../../tree-control';
import { markOrganization } from '../../../actions/organizations';

const Overview = (props) => {
  const {
    selectedOrganization, markedOrganization, activeOrganization, 
  } = props;

  return (
    <div
      style={{
        overflowY: 'scroll',
      }}
    >
      <TreeControl items={selectedOrganization} isMulti activeItem={markedOrganization} onClick={props.markOrganization} />
      <pre>{JSON.stringify(activeOrganization, undefined, 2)}</pre>
    </div>
  );
};

Overview.propTypes = {
  activeOrganization: PropTypes.object,
  markOrganization: PropTypes.any,
  markedOrganization: PropTypes.array,
  selectedOrganization: PropTypes.any,
};

export default connect(
  ({
    organizations: {
      activeOrganization, markedOrganization, selectedOrganization, 
    }, 
  }) => ({
    activeOrganization,
    markedOrganization,
    selectedOrganization,
  }),
  {
    markOrganization,
  }
)(Overview);
