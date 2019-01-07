import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ListGroupItem = ({ children, className, ...rest }) => (
  <div className={classNames('fur-list-group-item', className)} {...rest}>
    {children}
  </div>
);

ListGroupItem.defaultProps = {
  className: null,
};

ListGroupItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ListGroupItem;
