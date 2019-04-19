import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  state = {};

  render() {
    const { innerRef, children } = this.props;
    return (
      <div className="fur-form-select">
        <select ref={innerRef} {...this.props}>
          {children}
        </select>
      </div>
    );
  }
}

Select.defaultProps = {
  innerRef: null,
};

Select.propTypes = {
  children: PropTypes.node.isRequired,
  innerRef: PropTypes.func,
};

export default Select;
