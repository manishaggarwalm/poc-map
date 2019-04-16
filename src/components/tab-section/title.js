import React, { useEffect } from 'react';
import PropTypes from 'react-proptypes';

const TabTitle = ({ icon, onClick, status, title, tooltip }) => {
  useEffect(() => {
    window.$('[data-toggle="tooltip"]').tooltip();
  }, []);

  return (
    <li className={`innerPage-tab ${status === 'active' ? 'active' : ''}`}>
      <button
        type="button"
        className="innerPage-tab-link"
        id="org-overview-tab-id"
        title=""
        onClick={onClick}
        data-toggle="tooltip"
        data-original-title={tooltip || title}
      >
        <span className="icon">
          <i className={`fas fa-${icon}`} />
        </span>
        <span
          className="text d-none d-sm-none d-lg-flex"
          id="OrganizationNameTabText-id"
        >
          {title}
        </span>
      </button>
    </li>
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
