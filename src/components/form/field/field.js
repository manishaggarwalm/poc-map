import React from 'react';
import classNames from 'classnames';
import PropTypes from 'react-proptypes';

const Field = (ChildField) => {
  const WrappedComponent = (props) => {
    const {
      classes,
      schema: {
        label,
        label: { classes: labelClasses, text },
        field,
        field: { classes: fieldClasses },
      },
    } = props;

    return (
      <div className={classNames(classes)}>
        {!!Object.keys(label).length && (
          <label className={classNames(labelClasses)}>{text}</label>
        )}
        <div className={classNames(fieldClasses)}>
          <div className="input-group input-group-sm">
            <ChildField {...field} />
          </div>
        </div>
      </div>
    );
  };

  WrappedComponent.propTypes = {
    classes: PropTypes.string,
    schema: PropTypes.shape({
      field: PropTypes.shape({ classes: PropTypes.string.isRequired })
        .isRequired,
      label: PropTypes.shape({
        classes: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  return WrappedComponent;
};

export default Field;
