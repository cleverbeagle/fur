import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class Navigation extends React.Component {
  state = { open: false };

  toggleNavigation = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    const { children, orientation } = this.props;
    const { open } = this.state;

    return (
      <div className={`fur-navigation-${orientation} ${open ? 'fur-navigation-open' : ''}`}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { toggleNavigation: this.toggleNavigation }),
        )}
      </div>
    );
  }
}

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
};

export default Navigation;
