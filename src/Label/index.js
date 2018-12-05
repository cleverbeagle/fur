import React from 'react';
import PropTypes from 'prop-types';

class Label extends React.Component {
  state = {};

  render() {
    return <label className="fur-form-label" {...this.props} />;
  }
}

Label.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default Label;
