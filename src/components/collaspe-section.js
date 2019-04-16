import React, { useState } from 'react';
import PropTypes from 'react-proptypes';

const CollaspeSection = (props) => {
  const { children, title, isOpened } = props;
  const [isOpen, handleSection] = useState(isOpened);

  return (
    <article className={`collapsibleArticle ${isOpen ? 'expand' : 'collapse'}`}>
      <header
        className="articleHead clearfix"
        onClick={() => handleSection(!isOpen)}
      >
        <div className="headerContent pull-left">
          <span className="toggleArrow">
            <i className={`fas fa-chevron-${isOpen ? 'down' : 'right'}`} />
          </span>
          <span className="title">{title}</span>
        </div>
      </header>
      <div className="articleBody">{children}</div>
    </article>
  );
};

CollaspeSection.propTypes = {
  children: PropTypes.node.isRequired,
  isOpened: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

CollaspeSection.defaultProps = { isOpened: false };

export default CollaspeSection;
