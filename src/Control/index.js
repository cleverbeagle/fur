import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Control extends React.Component {
  state = {};

  render() {
    const { className, children } = this.props;
    return <div className={classNames('fur-form-control', className)}>{children}</div>;
  }
}

Control.defaultProps = {
  className: null,
};

Control.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Control;
