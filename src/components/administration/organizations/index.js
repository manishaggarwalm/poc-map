import React, { useState } from 'react';
import PropTypes from 'react-proptypes';
import { connect } from 'react-redux';
import TreeControl from '../../ready-components/tree-control';
import TabSection from '../../tab-section';
import { viewOrganization } from '../../../actions/organizations';
import Modal from '../../modal';

import Overview from './overview';
import Contacts from './contacts';
import Logo from './logo';
import PasswordPolicy from './password-policy';
import Users from './users';

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

const Organizations = (props) => {
  const { activeMenu, activeOrganization, selectedOrganization } = props;
  const [showDeleteModal, handleDeleteModal] = useState(false);

  let tabSections = [
    {
      component: Overview,
      icon: 'info-circle',
      status: 'active',
      title: 'Overview',
      tooltip: 'Organization Overview',
    },
    {
      component: Contacts,
      icon: 'address-card',
      status: 'inActive',
      title: 'Contacts',
    },
    {
      component: Users,
      icon: 'users',
      status: 'inActive',
      title: 'Users',
    },
    {
      component: PasswordPolicy,
      icon: 'key',
      status: 'inActive',
      title: 'Password Policy',
    },
    {
      component: Logo,
      icon: 'smile',
      status: 'inActive',
      title: 'Logo',
    },
  ];

  return (
    <>
      {showDeleteModal && (
        <Modal onClick={() => handleDeleteModal(false)}>
          <DeleteModal handleDeleteModal={handleDeleteModal} />
        </Modal>
      )}
      <div className="page-group">
        <div className="page-group_page">
          <div className="page-wrap">
            <div className="flex-columns">
              <div className="column-1 d-none d-sm-none d-lg-flex">
                <div className="actionBar-wrap dark">
                  <div className="actionBar">
                    <div className="left-section">
                      <div className="page-title">
                        <span className="text">{activeMenu.title} </span>
                        <span className="count" title="Number of Organizations">
                          ({activeMenu.count})
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
                    {selectedOrganization && selectedOrganization.length && Object.keys(activeOrganization).length ? (
                      <TreeControl items={selectedOrganization} activeItem={activeOrganization.locationID} onClick={props.viewOrganization} />
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
              <div className="column-2">
                {activeOrganization && Object.keys(activeOrganization).length ? <TabSection key={activeOrganization.locationID} sections={tabSections} /> : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Organizations.propTypes = {
  activeMenu: PropTypes.object,
  activeOrganization: PropTypes.object,
  selectedOrganization: PropTypes.array,
  viewOrganization: PropTypes.func,
};

export default connect(
  ({ organizations: { activeOrganization, selectedOrganization } }) => ({
    activeOrganization,
    selectedOrganization,
  }),
  { viewOrganization }
)(Organizations);
