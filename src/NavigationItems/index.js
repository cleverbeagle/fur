import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const NavigationItems = ({ children }) => <ul className="fur-navigation-items">{children}</ul>;

NavigationItems.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavigationItems;
