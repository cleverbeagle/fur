import PropTypes from 'prop-types';
import React from 'react';

import './styles.css';

const Button = ({ className, children, onClick, onMouseOver, onMouseOut, theme }) => (
  <button
    onClick={onClick}
    onMouseOver={onMouseOver}
    onFocus={onMouseOver}
    onMouseOut={onMouseOut}
    onBlur={onMouseOut}
    type="button"
    className={`fur-button fur-button-${theme || 'default'} ${className}`}
  >
    {children}
  </button>
);

Button.defaultProps = {
  onClick: null,
  onMouseOver: null,
  onMouseOut: null,
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  theme: PropTypes.string.isRequired,
};

export default Button;
