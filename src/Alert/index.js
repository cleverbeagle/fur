import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const Alert = ({ theme, className, children, ...rest }) => (
  <div {...rest} className={classNames('fur-alert', `fur-alert-${theme || 'default'}`, className)}>
    {children}
  </div>
);

Alert.defaultProps = {
  onClick: null,
  onMouseOver: null,
  onMouseOut: null,
  block: false,
};

Alert.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  theme: PropTypes.string.isRequired,
  block: PropTypes.bool,
};

export default Alert;
