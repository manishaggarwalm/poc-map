import React, { useState } from 'react';
import PropTypes from 'react-proptypes';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { addRole } from '../../actions/roles';
import InputField from '../form/fields/input';
import SelectField from '../form/fields/select';

const AddRole = (props) => {
  const [newRole, updateRole] = useState('');

  return (
    <form
      className="form-inline"
      onSubmit={(event) => {
        event.preventDefault();
        if (newRole) {
          props.addRole(newRole);
          updateRole('');
          props.history.push('/');
        }
      }}
    >
      <InputField label="Name" />
      <SelectField label="Name" />

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

export default withRouter(
  connect(
    null,
    { addRole }
  )(AddRole)
);
