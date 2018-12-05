import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  state = {};

  render() {
    return <input className="fur-form-input" {...this.props} />;
  }
}

Input.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default Input;
