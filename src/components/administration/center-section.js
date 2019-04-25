import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'react-proptypes';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import TreeControl from '../tree-control';
import { selectOrganization } from '../../actions/organizations';

const CenterSection = (props) => {
  const handleCompanyClick = (item) => {
    document.body.click();
    props.selectOrganization(item);
  };
  const { selectedOrganization, organizations } = props;
  const selectedOrganizationDetails = selectedOrganization && selectedOrganization.length ? selectedOrganization[0] : null;

  const [dropdownStatus, setDropdownStatus] = useState(false);

  return (
    <div className="center-section d-flex align-items-center">
      <Dropdown className="tree-dropdown-btn" onToggle={(value) => setDropdownStatus(value)}>
        <DropdownToggle variant="default" className="dropbtn" id="dropdown-basic">
          <span className="droptext ellipsis-150">{selectedOrganizationDetails ? selectedOrganizationDetails.name : ''}</span>
          <span className="arrow-icon">
            <i className="fas fa-angle-down" />
          </span>
        </DropdownToggle>
        <DropdownMenu className="tree-dropdown-wrap">
          {organizations.length && selectedOrganizationDetails ? (
            <TreeControl reset={dropdownStatus} items={organizations} activeItem={selectedOrganizationDetails.cKey} onClick={handleCompanyClick} />
          ) : (
            ''
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

CenterSection.propTypes = {
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
)(CenterSection);
