import React from 'react';
import PropTypes from 'prop-types';
import ListGroupItem from '../ListGroupItem';

const ListGroup = ({ children }) => <div className="fur-list-group">{children}</div>;

ListGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

ListGroup.Item = ListGroupItem;

export default ListGroup;
