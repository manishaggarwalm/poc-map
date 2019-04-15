import React from 'react';
import PropTypes from 'react-proptypes';
import Field from '../field';
import Input from './input';

const InputField = (props) => {
  return <Input {...props} />;
};

InputField.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

InputField.defaultProps = { required: false, type: 'text' };

export default Field(InputField);
