import React from 'react';
import PropTypes from 'react-proptypes';

const Input = ({ className, id, label, required, type, value }) => {
  return (
    <select
      className="custom-select custom-select-sm"
      id="OrganizationTypeInput-id"
    >
      <option>Open this select menu</option>
      <option value="Enterprise">Enterprise</option>
      <option value="Organization">Organization</option>
      <option value="Branch">Branch</option>
      <option value="Dealer">Dealer</option>
      <option value="Contractor">Contractor</option>
      <option value="Vendor">Vendor</option>
    </select>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

Input.defaultProps = { required: false, type: 'text' };

export default Input;
