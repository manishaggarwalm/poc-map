import React, { useState } from 'react';
import PropTypes from 'react-proptypes';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalTitleContainer = ({ children }) => <h5 className="modal-title">{children}</h5>;

ModalTitleContainer.propTypes = {
  children: PropTypes.node,
};

const Icon = () => <i className="fas fa-exclamation-triangle" />;

const ConfirmModal = ({ cancelButtontext, confirmButtontext, doubleConfirm, doubleConfirmText, icon: IconComponent, onConfirm, message, title }) => {
  const handleCheckBoxChange = ({ target: { checked } }) => handleDelete(checked);

  const [canDelete, handleDelete] = useState(!doubleConfirm);

  return (
    <Modal show onHide={() => onConfirm(false)}>
      <Modal.Header>
        <Modal.Title as={ModalTitleContainer}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="custom-alert-wrap warning" role="alert">
          <div className="icon">
            <IconComponent />
          </div>
          <div className="message-text-wrap">
            <span className="text">{message}</span>
            {doubleConfirm && (
              <div style={{ padding: '20px 0 0 0' }}>
                <label className="custom-checkbox">
                  <input type="checkbox" value={canDelete} onChange={handleCheckBoxChange} />
                  <span className="custom-checkbox-text">{doubleConfirmText}</span>
                  <span className="checkmark" />
                </label>
              </div>
            )}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="actionBar">
          <div className="left-section">
            <div className="actionBar-actions">
              <Button variant="light" onClick={() => onConfirm(false)}>
                <span className="icon">
                  <i className="fas fa-times" />
                </span>
                <span className="text">{cancelButtontext}</span>
              </Button>
            </div>
          </div>
          <div className="right-section">
            <div className="actionBar-actions">
              <Button variant="primary" disabled={!canDelete} onClick={() => onConfirm(true)}>
                <span className="icon">
                  <i className="fas fa-check" />
                </span>
                <span className="text">{confirmButtontext}</span>
              </Button>
            </div>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

ConfirmModal.propTypes = {
  cancelButtontext: PropTypes.string,
  confirmButtontext: PropTypes.string,
  doubleConfirm: PropTypes.bool,
  doubleConfirmText: PropTypes.string,
  icon: PropTypes.func,
  message: PropTypes.string,
  onConfirm: PropTypes.func,
  title: PropTypes.string,
};

ConfirmModal.defaultProps = {
  cancelButtontext: 'No',
  confirmButtontext: 'Yes',
  doubleConfirm: false,
  doubleConfirmText: 'Yes, I confirm',
  icon: Icon,
  message: 'Are you sure?',
  title: 'Confirm',
};

export default ConfirmModal;
