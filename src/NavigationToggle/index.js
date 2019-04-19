import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const NavigationToggle = ({ togglenavigation }) => (
  <Button className="fur-navigation-toggle" onClick={togglenavigation}>
    <span />
    <span />
    <span />
  </Button>
);

NavigationToggle.defaultProps = {
  togglenavigation: () => {},
};

NavigationToggle.propTypes = {
  togglenavigation: PropTypes.func,
};

export default NavigationToggle;
