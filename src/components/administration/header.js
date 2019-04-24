import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'react-proptypes';
import TreeControl from '../ready-components/tree-control';
import { selectOrganization } from '../../actions/organizations';

const Header = (props) => {
  const { selectedOrganization, handleSideBar, history, organizations } = props;
  const userLogout = () => {
    history.push('/');
  };
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
          <div className="tree-dropdown-btn">
            <button className="dropbtn dropdown-toggle" id="selected-TopOrg-id" data-toggle="dropdown">
              <span className="droptext ellipsis-150" id="selected-TopOrg-text-id">
                {selectedOrganizationDetails ? selectedOrganizationDetails.locationName : ''}
              </span>
              <span className="arrow-icon">
                <i className="fas fa-angle-down" />
              </span>
            </button>
            <div id="searchOrganization-control-id" className="tree-dropdown-wrap dropdown-menu disable-collapse" onClick={(event) => event.stopPropagation()}>
              {organizations.length && selectedOrganizationDetails ? (
                <TreeControl items={organizations} activeItem={selectedOrganizationDetails.locationID} onClick={props.selectOrganization} />
              ) : (
                ''
              )}
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
                  </span>{' '}
                  <span className="user-main-text text d-none d-sm-none d-lg-inline-flex">{user.name}</span>{' '}
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
