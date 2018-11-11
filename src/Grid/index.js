import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Container = ({ children, toggleNavigation }) => (
  <div className="fur-grid-container">
    {React.Children.map(children, (child) => React.cloneElement(child, { toggleNavigation }))}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  toggleNavigation: PropTypes.func.isRequired,
};

export default {
  Container,
};
