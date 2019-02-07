import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  state = {};

  render() {
    const { inputRef, ...rest } = this.props;
    return <textarea className="fur-form-textarea" ref={inputRef} {...rest} />;
  }
}

Textarea.propTypes = {};

export default Textarea;
