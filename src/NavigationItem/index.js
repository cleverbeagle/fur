import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const NavigationItem = ({ divider, label, onClick, children }) => (
  <li className={`fur-navigation-item ${divider ? 'fur-navigation-item-divider' : ''}`}>
    {!divider && (
      <React.Fragment>
        <button type="button" onClick={onClick}>
          {label}
        </button>
        {children}
      </React.Fragment>
    )}
  </li>
);

NavigationItem.defaultProps = {
  divider: false,
  onClick: null,
  children: null,
};

NavigationItem.propTypes = {
  divider: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default NavigationItem;
