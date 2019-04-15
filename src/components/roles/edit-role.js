import React, { useState } from 'react';
import PropTypes from 'react-proptypes';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Select from 'react-select';

import { updateRole } from '../../actions/roles';

const EditRole = (props) => {
  const [newRole, updateRole] = useState('');

  const roles = props.roles.map(({ isDeleted, roleId, roleName }) => ({
    label: roleName,
    value: { isDeleted, roleId, roleName },
  }));

  return (
    <form
      className="form-inline"
      onSubmit={(event) => {
        event.preventDefault();
        if (newRole) {
          props.updateRole(newRole);
          updateRole('');
          props.history.push('/');
        }
      }}
    >
      <div className="form-group mx-sm-3 mb-2">
        <label htmlFor="Role" className="sr-only">
          Select Role
        </label>
        <Select onChange={({ value }) => updateRole(value)} options={roles} />
      </div>
      {!!Object.keys(newRole).length && (
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="Role" className="sr-only">
            Role
          </label>
          <input
            type="text"
            className="form-control"
            id="Role"
            placeholder="Enter role..."
            value={newRole.roleName || ''}
            onChange={({ target: { value } }) => {
              const updatedRole = { ...newRole };

              updatedRole.roleName = value;

              updateRole(updatedRole);
            }}
          />
        </div>
      )}
      <button type="submit" className="btn btn-primary mb-2">
        Update
      </button>
    </form>
  );
};

EditRole.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  roles: PropTypes.array.isRequired,
  updateRole: PropTypes.func.isRequired,
};

export default withRouter(
  connect(
    ({ roles }) => ({ roles: roles.roles }),
    { updateRole }
  )(EditRole)
);
