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

Select.defaultProps = {
  innerRef: null,
};

Select.propTypes = {
  children: PropTypes.node.isRequired,
  innerRef: PropTypes.func,
};

export default React.forwardRef((props, ref) => <Select innerRef={ref} {...props} />);
