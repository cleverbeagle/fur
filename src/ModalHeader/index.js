import React from 'react';
import PropTypes from 'prop-types';

const ModalHeader = ({ children }) => (
  <React.Fragment>
    <header className="fur-modal-header clearfix">{children}</header>
  </React.Fragment>
);

ModalHeader.defaultProps = {};

ModalHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalHeader;
