import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const Button = ({ type, theme, block, className, children, ...rest }) => (
  <button
    {...rest}
    type={type}
    className={classNames(
      'fur-button',
      `fur-button-${theme}`,
      { 'fur-button-block': block },
      className,
    )}
  >
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
  className: null,
  theme: 'default',
  block: false,
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.string,
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
