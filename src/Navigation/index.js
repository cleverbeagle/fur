import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
    const { children, orientation, fluid } = this.props;
    const { open } = this.state;

    return (
      <div
        className={classNames({
          [`fur-navigation-${orientation}`]: !!orientation,
          'fur-navigation-open': open,
          'fur-navigation-fluid': fluid,
        })}
      >
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
  fluid: PropTypes.bool.isRequired,
};

Navigation.Items = NavigationItems;
Navigation.Item = NavigationItem;
Navigation.User = UserNavigationItem;
Navigation.Toggle = NavigationToggle;

export default Navigation;
