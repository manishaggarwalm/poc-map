import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'react-proptypes';
import Footer from './footer';
import Header from './header';
import SideBar from './sidebar';
import BodySection from './body-section';
import { fetchOrganizations } from '../../actions/organizations';

const Administration = (props) => {
  useEffect(() => {
    if (!props.organizations.length) props.fetchOrganizations();
  }, {});

  const [showSideBar, handleSideBar] = useState(false);

  return (
    <Fragment>
      <div className="ol-BasePage">
        {showSideBar && <SideBar handleSideBar={handleSideBar} />}
        <Header handleSideBar={handleSideBar} />
        <BodySection />
        <Footer />
      </div>
    </Fragment>
  );
};

Administration.propTypes = {
  fetchOrganizations: PropTypes.func,
  organizations: PropTypes.array,
};

export default connect(
  ({ organizations: { organizations } }) => ({
    organizations,
  }),
  { fetchOrganizations }
)(Administration);
