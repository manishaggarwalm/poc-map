/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Item = ({ title, children, isOpened, isActive }) => {
  const [active, setActive] = useState(isActive);
  const [opened, setOpened] = useState(isOpened);

  return (
    <li
      className={`list-group-item ${!children.length ? 'noTree' : ''} ${
        opened ? 'openTree' : 'closeTree'
      } ${active ? 'active' : ''}`}
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
            onClick={() => setActive(!active)}
          >
            <span className="text">{title}</span>
          </a>
        </div>
      </div>
      {!!children.length && (
        <div className="treeBody">
          <MainTree items={children} />
        </div>
      )}
    </li>
  );
};

const MainTree = ({ items }) => {
  const listItems = items.map((item, index) => <Item key={index} {...item} />);

  return <ul className="list-group">{listItems}</ul>;
};

const TreeControl = (props) => {
  const items = [
    {
      children: [
        { children: [], isActive: false, isOpened: false, title: 'Orbcomm' },
        {
          children: [
            {
              children: [],
              isActive: false,
              isOpened: true,
              title: 'Orbcomm-No-Child',
            },
          ],
          isActive: false,
          isOpened: false,
          title: 'Orbcomm',
        },
      ],
      isActive: true,
      isOpened: true,
      title: 'Orbcomm-Root',
    },
  ];

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
          <MainTree items={items} />
        </div>
      </div>
    </div>
  );
};

export default TreeControl;
