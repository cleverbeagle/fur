import React from 'react';
import PropTypes from 'prop-types';

class InputCap extends React.Component {
  state = {};

  render() {
    const { children, ...rest } = this.props;
    return (
      <div className="fur-form-input-cap" {...rest}>
        {children}
      </div>
    );
  }
}

InputCap.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InputCap;
