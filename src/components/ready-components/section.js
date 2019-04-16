import React from 'react';
import PropTypes from 'react-proptypes';
import Form from '../form';
import CollaspeSection from '../collaspe-section';

const Section = (props) => {
  return (
    <div>
      <CollaspeSection title="General Information" isOpened>
        <Form />
      </CollaspeSection>
      <CollaspeSection title="Attributes">
        <Form />
      </CollaspeSection>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

Section.defaultProps = { isOpened: false };

export default Section;
