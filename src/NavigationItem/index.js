import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const NavigationItem = ({ active, divider, label, onClick, children }) => (
  <li
    className={classNames(
      'fur-navigation-item',
      { 'fur-navigation-item-divider': divider },
      { 'fur-navigation-item-active': active },
    )}
  >
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
  active: false,
  divider: false,
  onClick: null,
  children: null,
};

NavigationItem.propTypes = {
  active: PropTypes.bool,
  divider: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default NavigationItem;
