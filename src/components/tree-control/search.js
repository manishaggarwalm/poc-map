import React from 'react';
import PropTypes from 'react-proptypes';

const Search = ({
  value, onChange, 
}) => {
  const handleChange = ({ target: { value } }) => {
    onChange(value);
  };

  return (
    <div className="treeControl-search-wrap">
      <div className="input-group input-group-sm">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fas fa-search" />
          </span>
        </div>
        <input type="text" value={value} onChange={handleChange} className="form-control treeControl-search-textBox" placeholder="Search" />
      </div>
    </div>
  );
};

Search.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Search;
