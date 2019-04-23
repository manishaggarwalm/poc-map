import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'react-proptypes';

const Header = ({ handleSideBar, history }) => {
  const userLogout = () => {
    history.push('/');
  };

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
        <div className="center-section d-flex align-items-center">
          <div className="tree-dropdown-btn">
            <button className="dropbtn dropdown-toggle" id="selected-TopOrg-id" data-toggle="dropdown">
              <span className="droptext ellipsis-150" id="selected-TopOrg-text-id">
                ORBCOMM-Root
              </span>
              <span className="arrow-icon">
                <i className="fas fa-angle-down" />
              </span>
            </button>
            <div id="searchOrganization-control-id" className="tree-dropdown-wrap dropdown-menu disable-collapse">
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
              </div>
            </div>
          </div>
        </div>
        <div className="right-section ">
          <div className="h-100 loggedIn-user-info">
            <div className="btn-group h-100">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-default dropdown-toggle user-name-btn"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="icon">
                    <i className="fas fa-user-circle" />
                  </span>
                  <span className="user-main-text text d-none d-sm-none d-lg-inline-flex">{user.name}</span>
                  <span className="arrow-icon">
                    <i className="fas fa-angle-down" />
                  </span>
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <Link className="dropdown-item" to="/help">
                    Help
                  </Link>
                  <Link className="dropdown-item" to="/settings">
                    My Settings
                  </Link>
                </div>
              </div>
              <button type="button" className="btn btn-light logout-btn" onClick={userLogout}>
                <span className="icon">
                  <i className="fas fa-sign-out-alt" />
                </span>
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
  history: PropTypes.object,
};

export default withRouter(Header);
