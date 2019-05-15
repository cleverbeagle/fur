import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Input extends React.Component {
  state = {};

  render() {
    const { inputRef, className, ...rest } = this.props;
    return <input className={classNames('fur-form-input', className)} ref={inputRef} {...rest} />;
  }
}

Input.defaultProps = {
  inputRef: null,
  type: 'text',
  className: null,
};

Input.propTypes = {
  inputRef: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
