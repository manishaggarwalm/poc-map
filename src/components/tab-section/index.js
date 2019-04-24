import React, { useState, lazy, Suspense } from 'react';
import PropTypes from 'react-proptypes';

const TabTitle = lazy(() => import('./title'));

const TabSection = (props) => {
  const { sections } = props;

  const [tabSections, updateSections] = useState(sections);

  const ActiveComponent = () => {
    const { component: Component } = tabSections.find(({ status }) => status === 'active');

    return <Component />;
  };

  const resetActiveAndSetCurrentActive = (index) => {
    let clonedSections = [...tabSections];

    clonedSections = clonedSections.map((section, currentIndex) => ({
      ...section,
      status: currentIndex === index ? 'active' : 'inActive',
    }));
    updateSections(clonedSections);
  };

  return (
    <div className="tab-control-wrap">
      <div className="actionBar-wrap light">
        <div className="actionBar">
          <div className="left-section">
            <div className="actionBar-actions">
              <div className="btn-group">
                <button type="button" className="btn btn-primary d-md-block d-lg-none" title="Show Organizations">
                  <span className="btn-icon">
                    <i className="fas fa-ellipsis-v" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="center-section">
            <div className="innerPage-tabs-wrap">
              <ul className="innerPage-tab-group d-inline-flex">
                <Suspense fallback={<div>Loading</div>}>
                  {tabSections.map(({ icon, status, title, tooltip }, index) => (
                    <TabTitle key={index} icon={icon} status={status} tooltip={tooltip} title={title} onClick={() => resetActiveAndSetCurrentActive(index)} />
                  ))}
                </Suspense>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="innerPageTab-content-group" id="organizations-innerPageTab-group-id">
        <div className="innerPageTab-content" id="contacts-InnerTabPage-id">
          <div className="body-wrap">
            <ActiveComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

TabSection.propTypes = {
  sections: PropTypes.array.isRequired,
};

export default TabSection;
