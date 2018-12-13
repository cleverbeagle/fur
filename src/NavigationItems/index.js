import React from 'react';
import PropTypes from 'prop-types';

const NavigationItems = ({ className, children }) => <ul className={`fur-navigation-items ${className}`}>{children}</ul>;

NavigationItems.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavigationItems;
