import React from 'react';
import TabSection from '../tab-section';

const Tabs = (props) => {
  const Overview = () => <div>Overview</div>;
  const Contacts = () => <div>Contacts</div>;
  const Users = () => <div>Users</div>;
  const PasswordPolicy = () => <div>Password Policy</div>;
  const Logo = () => <div>Logo</div>;

  const tabSections = [
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

  return <TabSection sections={tabSections} />;
};

export default Tabs;
