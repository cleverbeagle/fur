import React from 'react';
import PropTypes from 'prop-types';

class Legend extends React.Component {
  state = {};

  render() {
    const { children } = this.props;
    return <div className="fur-form-legend clearfix">{children}</div>;
  }
}

Legend.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Legend;
