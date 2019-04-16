import React, { useState } from 'react';
import PropTypes from 'react-proptypes';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import NavItem from './nav-item';

const Header = (props) => {
  const [isOpen, handleMenu] = useState(false);
  const {
    location: { pathname },
  } = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Dashboard
      </Link>
      <button
        className={`navbar-toggler ${!isOpen ? 'collapsed' : ''}`}
        type="button"
        onClick={() => handleMenu(!isOpen)}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <NavItem currentPath={pathname} title="All Roles" to="/" />
          <NavItem currentPath={pathname} title="Add Role" to="/add" />
          <NavItem currentPath={pathname} title="Edit Role" to="/edit" />
          <NavItem currentPath={pathname} title="Delete Roles" to="/delete" />
          <NavItem currentPath={pathname} title="Google Map" to="/map" />
          <NavItem currentPath={pathname} title="Tabs" to="/tab" />
          <NavItem currentPath={pathname} title="Section" to="/section" />
          <NavItem currentPath={pathname} title="Tree Control" to="/tree" />
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
    .isRequired,
};

export default withRouter(Header);
