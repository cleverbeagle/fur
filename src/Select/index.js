import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  state = {};

  render() {
    const { innerRef, children, disabled, ...rest } = this.props;
    return (
      <div className="fur-form-select">
        <select ref={innerRef} disabled={disabled} {...rest}>
          {children}
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  children: PropTypes.node.isRequired,
};

export default React.forwardRef((props, ref) => <Select innerRef={ref} {...props} />);
