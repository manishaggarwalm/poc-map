import React, { useState } from 'react';
import PropTypes from 'react-proptypes';
import { connect } from 'react-redux';
import TreeControl from '../../tree-control';
import TabSection from '../../tab-section';
import { viewOrganization } from '../../../actions/organizations';
import Overview from './overview';
import Contacts from './contacts';
import Logo from './logo';
import PasswordPolicy from './password-policy';
import Users from './users';
import ConfirmModal from '../../confirm-modal';

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
        <ConfirmModal
          doubleConfirm
          doubleConfirmText="Yes, I want to delete."
          confirmButtonText="Delete"
          title="Delete Organization"
          message="Are you sure that you want to delete Organization?"
          onConfirm={() => handleDeleteModal(false)}
        />
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
                      <TreeControl items={selectedOrganization} activeItem={activeOrganization.cKey} onClick={props.viewOrganization} />
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
              <div className="column-2">
                {activeOrganization && Object.keys(activeOrganization).length ? <TabSection key={activeOrganization.cKey} sections={tabSections} /> : ''}
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
