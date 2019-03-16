import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ListGroupItem from '../ListGroupItem';

const ListGroup = ({ children, className }) => (
  <div className={classNames('fur-list-group', className)}>{children}</div>
);

ListGroup.defaultProps = {
  className: null,
};

ListGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ListGroup.Item = ListGroupItem;

export default ListGroup;
