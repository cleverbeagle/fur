import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  state = {};

  render() {
    const { children } = this.props;
    return (
      <div className="fur-form-select">
        <select {...this.props}>{children}</select>
      </div>
    );
  }
}

Select.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Select;
