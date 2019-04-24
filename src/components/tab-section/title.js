import React from 'react';
import PropTypes from 'react-proptypes';
import ReactTooltip from 'react-tooltip';

const TabTitle = ({ icon, onClick, status, title, tooltip }) => {
  return (
    <>
      <li className={`innerPage-tab ${status === 'active' ? 'active' : ''}`}>
        <button type="button" className="innerPage-tab-link" id="org-overview-tab-id" onClick={onClick} data-tip={tooltip || title}>
          <span className="icon">
            <i className={`fas fa-${icon}`} />
          </span>
          <span className="text d-none d-sm-none d-lg-flex" id="OrganizationNameTabText-id">
            {title}
          </span>
        </button>
      </li>
      <ReactTooltip effect="solid" offset={{ bottom: -2 }} place={'bottom'} />
    </>
  );
};

TabTitle.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
};

export default TabTitle;
