import React from 'react';
import PropTypes from 'prop-types';

class Field extends React.Component {
  state = {};

  render() {
    const { children } = this.props;
    return <div className="fur-form-field">{children}</div>;
  }
}

Field.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Field;
