import React from 'react';
import PropTypes from 'react-proptypes';

const Modal = ({ children, onClick }) => (
  <>
    <div className="modal-backdrop fade show" onClick={onClick} />
    <div className="modal fade show" id="deleteOrganization-modal-id" onClick={onClick} tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document" onClick={(event) => event.stopPropagation()}>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  </>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Modal;
