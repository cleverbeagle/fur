import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Legend extends React.Component {
  state = {};

  render() {
    const { className, children } = this.props;
    return <div className={classNames('fur-form-legend', 'clearfix', className)}>{children}</div>;
  }
}

Legend.defaultProps = {
  className: null,
};

Legend.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Legend;
