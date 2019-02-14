import React from 'react';
import PropTypes from 'prop-types';

const ModalHeader = ({ children, closeButton, onClose }) => (
  <React.Fragment>
    <header className="fur-modal-header clearfix">{children}</header>
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
