import React from 'react';
import PropTypes from 'react-proptypes';

const Dummy = (props) => {
  const { title } = props;

  return <div>Dummy: {title}</div>;
};

Dummy.propTypes = {
  title: PropTypes.string,
};

Dummy.defaultProps = { isOpened: false };

export default Dummy;
