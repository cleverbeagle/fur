import React from 'react';
import PropTypes from 'prop-types';

const ModalFooter = ({ children }) => (
  <footer className="fur-modal-footer clearfix">{children}</footer>
);

ModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalFooter;
