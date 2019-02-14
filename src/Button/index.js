import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const Button = ({ type, theme, block, className, children, ...rest }) => (
  <button
    {...rest}
    type={type || 'button'}
    className={classNames(
      'fur-button',
      `fur-button-${theme || 'default'}`,
      { 'fur-button-block': block },
      className,
    )}
  >
    {children}
  </button>
);

Button.defaultProps = {
  className: null,
  theme: 'default',
  block: false,
};

Button.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
