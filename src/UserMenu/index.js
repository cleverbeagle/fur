import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

import './styles.css';

class UserMenu extends React.Component {
  state = { open: false };

  showMenu = () => {
    this.setState({ open: true });
  };

  hideMenu = () => {
    this.setState({ open: false });
  };

  render() {
    const { avatar, name, children } = this.props;
    const { open } = this.state;

    return (
      <div
        className={`fur-user-menu ${open ? 'fur-user-menu-open' : ''}`}
        onMouseOver={this.showMenu}
        onMouseOut={this.hideMenu}
        onFocus={this.showMenu}
        onBlur={this.hideMenu}
      >
        <Button onClick={this.toggleMenu}>
          {avatar && <img src={avatar} alt={name} />}
          <span>{name}</span>
          <i className="fas fa-caret-down" />
        </Button>
        {children}
      </div>
    );
  }
}

UserMenu.defaultProps = {
  avatar: null,
};

UserMenu.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default UserMenu;
