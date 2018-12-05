import React from 'react';
import PropTypes from 'prop-types';

const NavigationItems = ({ children }) => <ul className="fur-navigation-items">{children}</ul>;

NavigationItems.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavigationItems;
