import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const NavigationItem = ({ label, onClick, children }) => (
  <li className="fur-navigation-item">
    <button type="button" onClick={onClick}>
      {label}
    </button>
    {children}
  </li>
);

NavigationItem.defaultProps = {
  onClick: null,
  children: null,
};

NavigationItem.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default NavigationItem;
