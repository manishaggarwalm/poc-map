import React, { useState } from 'react';
import PropTypes from 'react-proptypes';
import Tree from './tree';

const Item = ({
  expandAll, item, isMulti, onClick, activeItem, 
}) => {
  const {
    cKey, name, children = [], toggled, 
  } = item;
  const [opened, setOpened] = useState(toggled);
  const isActive = isMulti ? activeItem.some((selectedItem) => selectedItem.cKey === cKey) : activeItem === cKey;
  const hasChildren = !!(children && children.length);

  const onArrowClick = (event) => {
    event.preventDefault();
    setOpened(!opened);
  };

  const onItemClick = (event) => {
    event.preventDefault();
    onClick({
      ...item,
    });
  };

  const getAllChildren = (list) => {
    const {
      children, ...rest 
    } = list;

    if (children && children.length) {
      children.forEach((element) => {
        getAllChildren(element);
      });
    }

    return rest;
  };

  const handleCheckboxClick = ({ target: { checked } }) => {
    let selectedItem = {
      ...item,
    };

    if (isMulti) {
      selectedItem = [
        {
          ...item,
        },
        ...getAllChildren(item),
      ];
    }
    onClick(selectedItem, checked);
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
          {isMulti ? (
            <label className="treeCheckbox">
              <input type="checkbox" name={cKey} onChange={handleCheckboxClick} checked={isActive} />
              <span className="text">{name}</span>
            </label>
          ) : (
            <a href="/" className="nodeContent-item" onClick={onItemClick}>
              <span className="text">{name}</span>
            </a>
          )}
        </div>
      </div>
      {hasChildren && <Tree items={children} activeItem={activeItem} isMulti={isMulti} onClick={onClick} expandAll={expandAll} />}
    </li>
  );
};

const itemPropTypes = {
  cKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  toggled: PropTypes.bool,
};

itemPropTypes.children = PropTypes.arrayOf(PropTypes.shape(itemPropTypes));

Item.propTypes = {
  activeItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  expandAll: PropTypes.bool,
  isMulti: PropTypes.bool,
  item: PropTypes.shape(itemPropTypes),
  onClick: PropTypes.func,
};

export default Item;
