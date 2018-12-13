import React from 'react';
import PropTypes from 'prop-types';

class Label extends React.Component {
  state = {};

  render() {
    const { className, ...rest } = this.props;
    return <label {...rest} className={`fur-form-label ${className}`} />;
  }
}

Label.defaultProps = {
  className: '',
};

Label.propTypes = {
  className: PropTypes.string,
};

export default Label;
