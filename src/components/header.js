import React from 'react';
import PropTypes from 'react-proptypes';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

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

const Header = props => {
  const {
    location: { pathname },
  } = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Dashboard
      </Link>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavItem currentPath={pathname} title="All Roles" to="/" />
          <NavItem currentPath={pathname} title="Add Role" to="/add" />
          <NavItem currentPath={pathname} title="Edit Role" to="/edit" />
          <NavItem currentPath={pathname} title="Delete Roles" to="/delete" />
          <NavItem currentPath={pathname} title="Google Map" to="/map" />
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
