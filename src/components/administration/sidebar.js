import React from 'react';
import PropTypes from 'react-proptypes';

const MenuItem = ({ icon, title }) => (
  <li className="menu-item-wrap">
    <div className="menu-node item-node">
      <button type="button" className="menu-item" onClick={() => {}}>
        <span className="icon">
          <i className={`fas fa-${icon}`} />
        </span>
        <span className="text">{title}</span>
      </button>
    </div>
  </li>
);

MenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Menu = ({ menus, section }) => (
  <li className="menu-item-wrap">
    <div className="menu-node title-node">
      <span className="text title">{section}</span>
    </div>
    <div className="menu-body">
      <ul className="menu-wrap">
        {menus.map((menu) => (
          <MenuItem key={menu.title} {...menu} />
        ))}
      </ul>
    </div>
  </li>
);

Menu.propTypes = {
  menus: PropTypes.array.isRequired,
  section: PropTypes.string.isRequired,
};

const SideBar = ({ handleSideBar }) => (
  <>
    <div id="body-backdrop-id" className="body-backdrop" style={{ zIndex: '100' }} onClick={() => handleSideBar(false)} />
    <div id="mySidenav" className="sidenav" style={{ width: '250px' }}>
      <span
        className="closebtn"
        onClick={(event) => {
          event.preventDefault();
          handleSideBar(false);
        }}
      >
        <i className="fas fa-times" />
      </span>
      <div className="sidenav-container">
        <div className="sidenav-wrap">
          <div className="sidenav-header">
            <div>
              <span className="text">iApp</span>
            </div>
          </div>
          <div className="sidenav-body">
            <div className="menu-body" id="sideMainMenuID">
              <ul className="menu-wrap">
                {[
                  {
                    menus: [{ icon: 'laptop', title: 'System' }, { icon: 'user-cog', title: 'Administration' }, { icon: 'toolbox', title: 'Tools' }],
                    section: 'Configuration',
                  },
                  {
                    menus: [
                      { icon: 'smile', title: 'RFID Tracking' },
                      { icon: 'smile', title: 'EMS' },
                      { icon: 'smile', title: 'RTS Stream' },
                      { icon: 'smile', title: 'Supervision' },
                      { icon: 'smile', title: 'Report Builder' },
                      { icon: 'smile', title: 'Print Service' },
                      { icon: 'smile', title: 'System Monitoring' },
                    ],
                    section: 'Implementation',
                  },
                  {
                    menus: [{ icon: 'smile', title: 'RTLS' }, { icon: 'smile', title: 'Alert' }],
                    section: 'Application',
                  },
                ].map((menu) => (
                  <Menu key={menu.section} {...menu} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

SideBar.propTypes = {
  handleSideBar: PropTypes.func,
};

export default SideBar;
