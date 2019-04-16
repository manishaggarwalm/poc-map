import React, { useState } from 'react';
import PropTypes from 'react-proptypes';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { addRole } from '../../actions/roles';

const AddRole = (props) => {
  const [newRole, updateRole] = useState('');
  const [newStatus, updateStatus] = useState('Active');

  return (
    <form
      className="form-inline"
      onSubmit={(event) => {
        event.preventDefault();
        if (newRole) {
          props.addRole({ roleName: newRole, status: newStatus });
          updateRole('');
          props.history.push('/');
        }
      }}
    >
      <div className="form-group mx-sm-3 mb-2">
        <label htmlFor="Role" className="sr-only">
          Role
        </label>
        <input
          type="text"
          className="form-control"
          id="Role"
          placeholder="Enter role..."
          value={newRole}
          onChange={({ target: { value } }) => updateRole(value)}
        />
      </div>
      <div className="form-group mx-sm-3 mb-2">
        <label htmlFor="Role" className="sr-only">
          Status
        </label>
        <select
          className="form-control"
          value={newStatus}
          onChange={({ target: { value } }) => updateStatus(value)}
        >
          <option>Active</option>
          <option>InActive</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mb-2">
        Create
      </button>
    </form>
  );
};

AddRole.propTypes = {
  addRole: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default connect(
  null,
  { addRole }
)(AddRole);
