import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavigationItem = ({ className, theme, active, divider, label, onClick, children, downArrow }) => (
  <li
    className={classNames(
      'fur-navigation-item',
      { 'fur-navigation-item-divider': divider },
      { 'fur-navigation-item-active': active },
      className,
    )}
  >
    {!divider && (
      <React.Fragment>
        <button
          type="button"
          onClick={onClick}
          className={classNames({ [`theme-${theme}`]: theme })}
        >
          {label}
          {downArrow ? <div className="fur-down-arrow" /> : ''}
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
  downArrow: false,
  className: false,
};

NavigationItem.propTypes = {
  active: PropTypes.bool,
  divider: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node,
  downArrow: PropTypes.bool,
  className: PropTypes.bool,
};

export default NavigationItem;
