import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  state = {};

  render() {
    return <textarea className="fur-form-textarea" {...this.props} />;
  }
}

Textarea.propTypes = {};

export default Textarea;
