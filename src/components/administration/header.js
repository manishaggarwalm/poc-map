import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'react-proptypes';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import CenterSection from './center-section';

const Header = (props) => {
  const userLogout = () => history.push('/');

  const { handleSideBar, history } = props;

  const user = { name: 'John Doe' };

  return (
    <div className="ol-BasePage-HeaderSection">
      <div className="d-flex align-items-stretch headerSection-content">
        <div className="d-flex justify-content-start align-items-center left-section">
          <div>
            <div className="main-menu">
              <button type="button" onClick={() => handleSideBar(true)} className="main-menu-btn" title="Main menu" data-toggle="tooltip">
                <span className="icon">
                  <i className="fas fa-bars" />
                </span>
              </button>
            </div>
          </div>
          <div className="Organization-logo d-none d-sm-none d-lg-inline-flex">
            <div className="Organization-logo_container">
              <img src="images/CompanyLogo.png" alt="Logo" />
            </div>
          </div>
        </div>
        <CenterSection />
        <div className="right-section ">
          <div className="h-100 loggedIn-user-info">
            <div className="btn-group h-100">
              <Dropdown className="btn-group" alignRight>
                <DropdownToggle variant="default" className="user-name-btn">
                  <span className="icon">
                    <i className="fas fa-user-circle" />
                  </span>{' '}
                  <span className="user-main-text text d-none d-sm-none d-lg-inline-flex">{user.name}</span>{' '}
                  <span className="arrow-icon">
                    <i className="fas fa-angle-down" />
                  </span>
                </DropdownToggle>
                <DropdownMenu className="tree-dropdown-wrap">
                  <Link className="dropdown-item" to="/help">
                    Help
                  </Link>
                  <Link className="dropdown-item" to="/settings">
                    My Settings
                  </Link>
                </DropdownMenu>
              </Dropdown>
              <button type="button" className="btn btn-light logout-btn" onClick={userLogout}>
                <span className="icon">
                  <i className="fas fa-sign-out-alt" />
                </span>{' '}
                <span className="text d-none d-sm-none d-lg-inline-flex">logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  handleSideBar: PropTypes.func,
  history: PropTypes.shape({ push: PropTypes.func }),
};

export default withRouter(Header);
