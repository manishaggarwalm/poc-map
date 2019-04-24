import React, { useState } from 'react';
import PropTypes from 'react-proptypes';
import Organizations from './organizations';

const MenuItem = ({ icon, isActive, title, count }) => (
  <li className={`page-tab ${isActive ? 'active' : ''}`}>
    <button type="button" className="page-tab_item" title={title} data-toggle="tooltip" onClick={() => {}} data-original-title={title}>
      <div className="page-tab_item_content">
        <div className="left-column">
          <div className="icon">
            <i className={`fas fa-${icon}`} />
          </div>
        </div>
        <div className="middle-column js-hideItems d-none d-sm-none d-lg-flex">
          <span className="text">{title}</span>
          {!!count && <span className="count">({count})</span>}
        </div>
      </div>
    </button>
  </li>
);

MenuItem.propTypes = {
  count: PropTypes.number,
  icon: PropTypes.string,
  isActive: PropTypes.bool,
  title: PropTypes.string,
};

const BodySection = (props) => {
  const [isMenuExpanded, expandMenu] = useState(false);
  const leftMenu = {
    icon: 'user-cog',
    name: 'Administration',
    subMenu: [
      { count: 80, icon: 'sitemap', isActive: true, title: 'Organizations' },
      { count: 6, icon: 'shield-alt', isActive: false, title: 'Roles' },
      { icon: 'envelope', isActive: false, title: 'Message Manager' },
      { icon: 'book-open', isActive: false, title: 'Catalogue' },
      { icon: 'sliders-h', isActive: false, title: 'Configuration' },
    ],
  };

  const activeMenu = leftMenu.subMenu.find(({ isActive }) => isActive === true);

  return (
    <div className="ol-BasePage-BodySection">
      <div className="ol-main-layout">
        <div className={`ol-LeftSection ${!isMenuExpanded ? 'js-hideItems-handler' : ''}`}>
          <div className="actionBar-wrap darker">
            <div className="actionBar">
              <div className="left-section js-hideItems">
                <div className="section-header-icon">
                  <i className={`fas fa-${leftMenu.icon}`} />
                </div>
              </div>
              <div className="middle-section d-none d-sm-none d-lg-flex js-hideItems">
                <div className="section-title">
                  <span className="text">{leftMenu.name}</span>
                </div>
              </div>
              <div className="right-section d-none d-sm-none d-lg-flex">
                <div className="actionBar-actions">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-light minimize-column-btn"
                      id="minimize-column-btn-id"
                      onClick={() => expandMenu(!isMenuExpanded)}
                      title=""
                      data-toggle="tooltip"
                      data-original-title="Expand / Collapse side menu"
                    >
                      <span className="icon">
                        <i className={`fas fa-angle-double-${!isMenuExpanded ? 'right' : 'left'}`} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-tabs_control" id="sideNavTabsID">
            <ul className="parent-page-tabs">
              {leftMenu.subMenu.map((menu) => (
                <MenuItem key={menu.title} {...menu} />
              ))}
            </ul>
          </div>
        </div>
        <div className="ol-RightSection">
          <Organizations activeMenu={activeMenu} />
        </div>
      </div>
    </div>
  );
};

export default BodySection;
