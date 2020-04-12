import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';

class UserNavigationItem extends React.Component {
  state = { open: false };

  componentDidMount() {
    document.body.addEventListener('click', this.handleOpenCloseMenu);
  }

  toggleMenu = () => {
    this.setState((state) => ({
      open: !state.open,
    }));
  };

  handleOpenCloseMenu = () => {
    this.setState({ open: false });
  };

  render() {
    const { avatar, name, children } = this.props;
    const { open } = this.state;

    return (
      <li
        className={classNames(
          'fur-navigation-item',
          'fur-user-navigation-item',
          {
            'fur-user-navigation-item-open': open,
          },
          {
            'fur-user-navigation-item-with-avatar': !!avatar,
          },
        )}
      >
        <Button onClick={this.toggleMenu}>
          {avatar && <img src={avatar} alt={name} />}
          <span>{name}</span>
          <div className="fur-down-arrow" />
        </Button>
        {children}
      </li>
    );
  }
}

UserNavigationItem.defaultProps = {
  avatar: null,
};

UserNavigationItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default UserNavigationItem;
