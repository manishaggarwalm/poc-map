import React from 'react';
import PropTypes from 'react-proptypes';
import InputField from './input';
import SelectField from './select';

const Field = (props) => {
  const {
    schema: {
      field: { type },
    },
  } = props;

  switch (type) {
    case 'text':
      return <InputField {...props} />;
    case 'select':
      return <SelectField {...props} />;

    default:
      return <InputField {...props} />;
  }
};

Field.propTypes = {
  schema: PropTypes.shape({
    field: PropTypes.shape({ type: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
};

export default Field;
