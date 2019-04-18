import React, { useState } from 'react';
import PropTypes from 'react-proptypes';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Select from 'react-select';

import { deleteRoles } from '../../actions/roles';

const DeleteRole = (props) => {
  const [selectedRoles, updateSelectedRoles] = useState([]);

  const roles = props.roles.map(({ roleId, roleName }) => ({
    label: roleName,
    role: { roleId, roleName },
    value: roleId,
  }));

  return (
    <form
      className="form-inline"
      onSubmit={(event) => {
        event.preventDefault();
        props.deleteRoles(selectedRoles);
        updateSelectedRoles([]);
        props.history.push('/');
      }}
    >
      <div className="form-group mx-sm-3 mb-2">
        <label htmlFor="Role" className="sr-only">
          Select Role
        </label>
        <Select
          name="form-field-name"
          value={selectedRoles || []}
          onChange={(value) => {
            updateSelectedRoles(value);
          }}
          options={roles}
          isMulti
          isSearchable
        />
      </div>
      <button type="submit" className="btn btn-primary mb-2">
        Delete
      </button>
    </form>
  );
};

DeleteRole.propTypes = {
  deleteRoles: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  roles: PropTypes.array.isRequired,
};

export default withRouter(
  connect(
    ({ roles }) => ({ roles: roles.roles }),
    { deleteRoles }
  )(DeleteRole)
);
