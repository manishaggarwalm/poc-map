import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'react-proptypes';
import Dropdown from 'react-bootstrap/Dropdown';
import TreeControl from '../tree-control';
import { selectOrganization } from '../../actions/organizations';

const Header = (props) => {
  const userLogout = () => history.push('/');
  const handleCompanyClick = (item) => {
    document.body.click();
    props.selectOrganization(item);
  };

  const [dropdownStatus, setDropdownStatus] = useState(false);

  const { selectedOrganization, handleSideBar, history, organizations } = props;
  const selectedOrganizationDetails = selectedOrganization && selectedOrganization.length ? selectedOrganization[0] : null;

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
          <Dropdown className="tree-dropdown-btn" onToggle={(value) => setDropdownStatus(value)}>
            <Dropdown.Toggle variant="default" className="dropbtn" id="dropdown-basic">
              <span className="droptext ellipsis-150">{selectedOrganizationDetails ? selectedOrganizationDetails.name : ''}</span>
              <span className="arrow-icon">
                <i className="fas fa-angle-down" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="tree-dropdown-wrap">
              {organizations.length && selectedOrganizationDetails ? (
                <TreeControl reset={dropdownStatus} items={organizations} activeItem={selectedOrganizationDetails.cKey} onClick={handleCompanyClick} />
              ) : (
                ''
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="right-section ">
          <div className="h-100 loggedIn-user-info">
            <div className="btn-group h-100">
              <Dropdown className="btn-group" alignRight>
                <Dropdown.Toggle variant="default" className="user-name-btn">
                  <span className="icon">
                    <i className="fas fa-user-circle" />
                  </span>{' '}
                  <span className="user-main-text text d-none d-sm-none d-lg-inline-flex">{user.name}</span>{' '}
                  <span className="arrow-icon">
                    <i className="fas fa-angle-down" />
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="tree-dropdown-wrap">
                  <Link className="dropdown-item" to="/help">
                    Help
                  </Link>
                  <Link className="dropdown-item" to="/settings">
                    My Settings
                  </Link>
                </Dropdown.Menu>
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
  history: PropTypes.object,
  organizations: PropTypes.array,
  selectOrganization: PropTypes.func,
  selectedOrganization: PropTypes.array,
};

export default connect(
  ({ organizations: { selectedOrganization, organizations } }) => ({
    organizations,
    selectedOrganization,
  }),
  { selectOrganization }
)(withRouter(Header));
