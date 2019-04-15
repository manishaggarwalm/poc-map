import React from 'react';
import PropTypes from 'react-proptypes';

const Input = ({ className, id, label, required, type, value }) => {
  return (
    <input
      type={type}
      className="form-control form-control-sm"
      required={required}
      id={id}
      value={value}
    />
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
