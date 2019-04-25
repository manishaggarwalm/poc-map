import React, { useState } from 'react';
import PropTypes from 'react-proptypes';
import Tree from './tree';

const Item = ({ expandAll, cKey, name, children, toggled, onClick, activeItem }) => {
  const [opened, setOpened] = useState(toggled);
  const isActive = activeItem === cKey;
  const hasChildren = !!(children && children.length);

  const onArrowClick = (event) => {
    event.preventDefault();
    setOpened(!opened);
  };

  const onItemClick = (event) => {
    event.preventDefault();
    onClick({ cKey, children, name, toggled });
  };

  return (
    <li className={`list-group-item ${!hasChildren ? 'noTree' : ''} ${opened || expandAll ? 'openTree' : 'closeTree'} ${isActive ? 'active' : ''}`}>
      <div className="treeNode">
        <div className="nodeHandler">
          <a href="/" onClick={onArrowClick}>
            <i className="fas fa-angle-right" />
            <i className="fas fa-angle-down" />
            <i className="fas fa-circle" />
          </a>
        </div>
        <div className="nodeContent">
          <a href="/" className="nodeContent-item" onClick={onItemClick}>
            <span className="text">{name}</span>
          </a>
        </div>
      </div>
      {hasChildren && <Tree items={children} activeItem={activeItem} onClick={onClick} expandAll={expandAll} />}
    </li>
  );
};

const itemPropTypes = {
  activeItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  expandAll: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  toggled: PropTypes.bool,
};

itemPropTypes.children = PropTypes.arrayOf(PropTypes.shape(itemPropTypes));

Item.propTypes = { ...itemPropTypes };

export default Item;
