import React, { useState } from 'react';
import PropTypes from 'react-proptypes';
import { connect } from 'react-redux';
import Modal from '../modal';
import TreeControl from '../ready-components/tree-control';
import { viewOrganization } from '../../actions/organizations';

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

const DeleteModal = ({ handleDeleteModal }) => {
  const [canDelete, handleDelete] = useState(false);

  return (
    <>
      <div className="modal-header">
        <h5 className="modal-title">Delete Organization</h5>
      </div>
      <div className="modal-body">
        <div className="custom-alert-wrap warning" role="alert">
          <div className="icon">
            <i className="fas fa-exclamation-triangle" />
          </div>
          <div className="message-text-wrap">
            <span className="text">Are you sure that you want to delete Organization?</span>
            <div style={{ padding: '20px 0 0 0' }}>
              <label className="custom-checkbox">
                <input type="checkbox" value={canDelete} onChange={(e) => handleDelete(e.target.checked)} />
                <span className="custom-checkbox-text">Yes, I want to delete.</span>
                <span className="checkmark" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <div className="actionBar">
          <div className="left-section">
            <div className="actionBar-actions">
              <button type="button" className="btn btn-light" data-dismiss="modal" aria-label="Close" onClick={() => handleDeleteModal(false)}>
                <span className="icon">
                  <i className="fas fa-times" />
                </span>
                <span className="text">No</span>
              </button>
            </div>
          </div>
          <div className="right-section">
            <div className="actionBar-actions">
              <button type="button" className="btn btn-primary" disabled={!canDelete} onClick={() => handleDeleteModal(false)}>
                <span className="icon">
                  <i className="fas fa-check" />
                </span>
                <span className="text">Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DeleteModal.propTypes = {
  handleDeleteModal: PropTypes.func,
};

const BodySection = (props) => {
  const { activeOrganization, organizations } = props;
  const [isMenuExpanded, expandMenu] = useState(false);
  const [showDeleteModal, handleDeleteModal] = useState(false);

  return (
    <>
      {showDeleteModal && (
        <Modal onClick={() => handleDeleteModal(false)}>
          <DeleteModal handleDeleteModal={handleDeleteModal} />
        </Modal>
      )}
      <div className="ol-BasePage-BodySection">
        <div className="ol-main-layout">
          <div className={`ol-LeftSection ${!isMenuExpanded ? 'js-hideItems-handler' : ''}`}>
            <div className="actionBar-wrap darker">
              <div className="actionBar">
                <div className="left-section js-hideItems">
                  <div className="section-header-icon">
                    <i className="fas fa-user-cog" />
                  </div>
                </div>
                <div className="middle-section d-none d-sm-none d-lg-flex js-hideItems">
                  <div className="section-title">
                    <span className="text">Administration</span>
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
                {[
                  { count: 80, icon: 'sitemap', isActive: true, title: 'Organizations' },
                  { count: 6, icon: 'shield-alt', isActive: false, title: 'Roles' },
                  { icon: 'envelope', isActive: false, title: 'Message Manager' },
                  { icon: 'book-open', isActive: false, title: 'Catalogue' },
                  { icon: 'sliders-h', isActive: false, title: 'Configuration' },
                ].map((menu) => (
                  <MenuItem key={menu.title} {...menu} />
                ))}
              </ul>
            </div>
          </div>
          <div className="ol-RightSection">
            <div className="page-group">
              <div className="page-group_page">
                <div className="page-wrap">
                  <div className="flex-columns">
                    <div className="column-1 d-none d-sm-none d-lg-flex">
                      <div className="actionBar-wrap dark">
                        <div className="actionBar">
                          <div className="left-section">
                            <div className="page-title">
                              <span className="text">Organizations</span>
                              <span className="count" title="Number of Organizations">
                                (80)
                              </span>
                            </div>
                          </div>
                          <div className="right-section">
                            <div className="actionBar-actions">
                              <div className="btn-group">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() => {}}
                                  title=""
                                  data-toggle="tooltip"
                                  data-original-title="Add new child Organization"
                                >
                                  <span className="icon">
                                    <i className="fa fa-plus" />
                                  </span>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() => handleDeleteModal(true)}
                                  title=""
                                  data-toggle="tooltip"
                                  data-original-title="Delete Organization"
                                >
                                  <span className="icon">
                                    <i className="fa fa-trash" />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="body-wrap">
                        <div className="bodyContent-wrap">
                          {organizations.length && Object.keys(activeOrganization).length ? (
                            <TreeControl items={organizations} activeItem={activeOrganization.locationID} onClick={props.viewOrganization} />
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="column-2">c2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BodySection.propTypes = {
  activeOrganization: PropTypes.string,
  organizations: PropTypes.array,
  viewOrganization: PropTypes.func,
};

export default connect(
  ({ organizations: { activeOrganization, organizations } }) => ({
    activeOrganization,
    organizations,
  }),
  { viewOrganization }
)(BodySection);
