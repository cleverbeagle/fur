import PropTypes from 'prop-types';
import React from 'react';

const Button = ({children, onClick}) => {
  return (
    <button>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
