import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const NavigationToggle = ({ toggleNavigation }) => (
  <Button className="fur-navigation-toggle" onClick={toggleNavigation}>
    <span />
    <span />
    <span />
  </Button>
);

NavigationToggle.defaultProps = {
  toggleNavigation: () => {},
};

NavigationToggle.propTypes = {
  toggleNavigation: PropTypes.func,
};

export default NavigationToggle;
