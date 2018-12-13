import React from 'react';
import PropTypes from 'prop-types';

const ModalTitle = ({ children }) => <h2>{children}</h2>;

ModalTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalTitle;
