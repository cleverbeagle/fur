import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Checkbox = (props) => (
  <div className="fur-checkbox">
    <input type="checkbox" {...props} />
    <div className="fur-checkbox-box" />
  </div>
);

Checkbox.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default Checkbox;
