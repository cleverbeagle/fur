import React from 'react';
import PropTypes from 'prop-types';

const ButtonGroup = ({ children }) => <div className="fur-button-group">{children}</div>;

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonGroup;
