import React from 'react';
import PropTypes from 'prop-types';

const ModalHeader = ({ children, closeButton, onClose }) => (
  <React.Fragment>
    <header className="fur-modal-header clearfix">
      {children}
      {closeButton && (
        <button type="button" className="fur-modal-close" onClick={onClose}>
          X
        </button>
      )}
    </header>
  </React.Fragment>
);

ModalHeader.defaultProps = {
  closeButton: false,
};

ModalHeader.propTypes = {
  children: PropTypes.node.isRequired,
  closeButton: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default ModalHeader;
