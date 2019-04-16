import React from 'react';
import PropTypes from 'react-proptypes';
import { Link } from 'react-router-dom';

const NavItem = ({ currentPath, to, title }) => (
  <li className={`nav-item ${currentPath === to ? 'active' : ''}`}>
    <Link className="nav-link" to={to}>
      {title}
    </Link>
  </li>
);

NavItem.propTypes = {
  currentPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavItem;
