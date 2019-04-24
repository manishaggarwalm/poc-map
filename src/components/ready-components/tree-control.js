/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Item = ({ locationID, locationName, subLocation, isOpened, onClick, activeItem }) => {
  const [opened, setOpened] = useState(isOpened);
  const isActive = activeItem === locationID;
  const hasChildren = !!(subLocation && subLocation.length);

  return (
    <li className={`list-group-item ${!hasChildren ? 'noTree' : ''} ${opened ? 'openTree' : 'closeTree'} ${isActive ? 'active' : ''}`}>
      <div className="treeNode">
        <div className="nodeHandler">
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              setOpened(!opened);
            }}
          >
            <i className="fas fa-angle-right" />
            <i className="fas fa-angle-down" />
            <i className="fas fa-circle" />
          </a>
        </div>
        <div className="nodeContent">
          <a
            href="/"
            className="nodeContent-item"
            onClick={(event) => {
              event.preventDefault();
              onClick({ isOpened, locationID, locationName, subLocation });
            }}
          >
            <span className="text">{locationName}</span>
          </a>
        </div>
      </div>
      {hasChildren && (
        <div className="treeBody">
          <MainTree items={subLocation} activeItem={activeItem} onClick={onClick} />
        </div>
      )}
    </li>
  );
};

const MainTree = ({ items, activeItem, onClick }) => {
  const listItems = items.map((item) => <Item key={item.locationID} {...item} activeItem={activeItem} onClick={onClick} />);

  return <ul className="list-group">{listItems}</ul>;
};

const TreeControl = ({ items, activeItem, onClick }) => {
  return (
    <div className="treeControl">
      <div className="treeControl-search-wrap">
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-search" />
            </span>
          </div>
          <input type="text" className="form-control treeControl-search-textBox" id="searchOrganization-textbox-id" placeholder="Search" />
        </div>
      </div>
      <div className="treeBody-wrap" id="topLevel-OrganizationTreeControlID">
        <div className="treeBody">
          <MainTree items={items} activeItem={activeItem} onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default TreeControl;
