import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const Button = ({ className, children, onClick, onMouseOver, onMouseOut, theme, block }) => (
  <button
    onClick={onClick}
    onMouseOver={onMouseOver}
    onFocus={onMouseOver}
    onMouseOut={onMouseOut}
    onBlur={onMouseOut}
    type="button"
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
  onClick: null,
  onMouseOver: null,
  onMouseOut: null,
  block: false,
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  theme: PropTypes.string.isRequired,
  block: PropTypes.bool,
};

export default Button;
