import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ children, onClick }) => (
  <button onClick={onClick} type="button">
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
