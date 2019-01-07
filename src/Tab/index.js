import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Tab extends React.Component {
  state = {};

  render() {
    const { title, className, isActive, ...rest } = this.props;
    return (
      <li
        className={classNames('fur-tabs-tab', className, { 'fur-tabs-tab-active': isActive })}
        {...rest}
      >
        <span className="fur-tabs-tab-title">{title}</span>
      </li>
    );
  }
}

Tab.defaultProps = {
  className: null,
  isActive: false,
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};

export default Tab;
