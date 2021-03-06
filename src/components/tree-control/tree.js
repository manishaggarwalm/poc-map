import React from 'react';
import PropTypes from 'react-proptypes';
import Item from './item';

const Tree = ({
  expandAll, isMulti, items, activeItem, onClick, 
}) => {
  const listItems = items.map((item) => <Item isMulti={isMulti} key={item.cKey} item={item} expandAll={expandAll} activeItem={activeItem} onClick={onClick} />);

  return (
    <div className="treeBody">
      <ul className="list-group">{listItems}</ul>
    </div>
  );
};

const itemPropTypes = {
  cKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  toggled: PropTypes.bool,
};

itemPropTypes.children = PropTypes.arrayOf(PropTypes.shape(itemPropTypes));

Tree.propTypes = {
  activeItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  expandAll: PropTypes.bool,
  isMulti: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape(itemPropTypes)),
  onClick: PropTypes.func,
};

export default Tree;
