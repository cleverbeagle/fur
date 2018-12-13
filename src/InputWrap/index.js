import React from 'react';
import PropTypes from 'prop-types';

class InputWrap extends React.Component {
  state = {};

  render() {
    const { children } = this.props;
    return <div className="fur-form-input-wrap clearfix">{children}</div>;
  }
}

InputWrap.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InputWrap;
