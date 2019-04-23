/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Item = ({ id, title, children, isOpened, setActiveOrg, activeOrg }) => {
  const [opened, setOpened] = useState(isOpened);
  const isActive = activeOrg === id;

  return (
    <li
      className={`list-group-item ${!children.length ? 'noTree' : ''} ${
        opened ? 'openTree' : 'closeTree'
      } ${isActive ? 'active' : ''}`}
    >
      <div className="treeNode">
        <div className="nodeHandler">
          <a href="#/" onClick={() => setOpened(!opened)}>
            <i className="fas fa-angle-right" />
            <i className="fas fa-angle-down" />
            <i className="fas fa-circle" />
          </a>
        </div>
        <div className="nodeContent">
          <a
            href="#/"
            className="nodeContent-item"
            onClick={() => setActiveOrg(id)}
          >
            <span className="text">{title}</span>
          </a>
        </div>
      </div>
      {!!children.length && (
        <div className="treeBody">
          <MainTree
            items={children}
            activeOrg={activeOrg}
            setActiveOrg={setActiveOrg}
          />
        </div>
      )}
    </li>
  );
};

const MainTree = ({ items, activeOrg, setActiveOrg }) => {
  const listItems = items.map((item, index) => (
    <Item
      key={index}
      {...item}
      activeOrg={activeOrg}
      setActiveOrg={setActiveOrg}
    />
  ));

  return <ul className="list-group">{listItems}</ul>;
};

const TreeControl = (props) => {
  const items = [
    {
      children: [
        {
          children: [],
          id: 4,
          isActive: false,
          isOpened: false,
          title: 'Orbcomm',
        },
        {
          children: [
            {
              children: [],
              id: 2,
              isActive: false,
              isOpened: true,
              title: 'Orbcomm-No-Child',
            },
          ],
          id: 3,
          isActive: false,
          isOpened: false,
          title: 'Orbcomm',
        },
      ],
      id: 1,
      isActive: true,
      isOpened: true,
      title: 'Orbcomm-Root',
    },
  ];
  const [activeOrg, setActiveOrg] = useState(1);

  return (
    <div className="treeControl">
      <div className="treeControl-search-wrap">
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-search" />
            </span>
          </div>
          <input
            type="text"
            className="form-control treeControl-search-textBox"
            id="searchOrganization-textbox-id"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="treeBody-wrap" id="topLevel-OrganizationTreeControlID">
        <div className="treeBody">
          <MainTree
            items={items}
            activeOrg={activeOrg}
            setActiveOrg={setActiveOrg}
          />
        </div>
      </div>
    </div>
  );
};

export default TreeControl;
