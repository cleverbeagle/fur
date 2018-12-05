import React from 'react';
import PropTypes from 'prop-types';
import NavigationItems from '../NavigationItems';
import NavigationItem from '../NavigationItem';
import UserNavigationItem from '../UserNavigationItem';
import NavigationToggle from '../NavigationToggle';

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

Navigation.Items = NavigationItems;
Navigation.Item = NavigationItem;
Navigation.User = UserNavigationItem;
Navigation.Toggle = NavigationToggle;

export default Navigation;
