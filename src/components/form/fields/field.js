import React from 'react';
import classNames from 'classnames';
import PropTypes from 'react-proptypes';

const Field = (ChildField) => {
  const WrappedComponent = (props) => {
    const { className, label } = props;

    return (
      <div className={classNames('form-group', className)}>
        {!!label && (
          <label className="col-form-label col-form-label-sm col-md-12 col-lg-12 col-xl-4 text-lg-left text-xl-right">
            {label}
          </label>
        )}
        <div className="col-md-12 col-lg-12 col-xl-6">
          <div className="input-group input-group-sm">
            <ChildField {...props} />
          </div>
        </div>
      </div>
    );
  };

  WrappedComponent.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
  };

  return WrappedComponent;
};

export default Field;
