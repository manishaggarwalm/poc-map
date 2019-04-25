import React, { useEffect, useState } from 'react';
import PropTypes from 'react-proptypes';
import { cloneDeep } from 'lodash';
import Tree from './tree';
import Search from './search';

const TreeControl = ({ isSearchable, items, activeItem, onClick, reset }) => {
  const [searchText, updateSearchText] = useState('');
  const [expandAll, toggleExpandList] = useState(false);
  const [list, updateList] = useState(items);

  useEffect(() => {
    updateList(items);
  }, [items]);

  useEffect(() => {
    if (!reset) {
      updateSearchText('');
      updateList(items);
    }
  }, [reset]);

  const filterList = (list, value) =>
    list.filter((item) => {
      if (
        item.name
          .toLowerCase()
          .trim()
          .indexOf(value.toLowerCase().trim()) > -1
      ) {
        return true;
      } else if (item.children && item.children.length) {
        item.children = cloneDeep(filterList(item.children, value));

        if (item.children.length) {
          return true;
        }
      }

      return false;
    });

  const handleOnChange = (value) => {
    let updatedList = cloneDeep(items);

    updatedList = filterList(updatedList, value);

    updateSearchText(value);
    if (value) {
      updateList(updatedList);
      toggleExpandList(true);
    } else {
      updateList(items);
      toggleExpandList(false);
    }
  };

  return (
    <div className="treeControl">
      {isSearchable && <Search value={searchText} onChange={handleOnChange} />}
      <div className="treeBody-wrap">
        <Tree items={list} activeItem={activeItem} onClick={onClick} expandAll={expandAll} />
      </div>
    </div>
  );
};

const itemPropTypes = { cKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, name: PropTypes.string.isRequired };

itemPropTypes.children = PropTypes.arrayOf(PropTypes.shape(itemPropTypes));

TreeControl.propTypes = {
  activeItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isSearchable: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape(itemPropTypes)).isRequired,
  onClick: PropTypes.func,
  reset: PropTypes.bool,
};

TreeControl.defaultProps = {
  isSearchable: true,
  onClick: () => {},
  reset: true,
};

export default TreeControl;
