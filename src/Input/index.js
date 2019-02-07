import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  state = {};

  render() {
    const { inputRef, ...rest } = this.props;
    return <input className="fur-form-input" ref={inputRef} {...rest} />;
  }
}

Input.defaultProps = {
  inputRef: null,
  type: 'text',
};

Input.propTypes = {
  inputRef: PropTypes.func,
  type: PropTypes.string,
};

export default Input;
