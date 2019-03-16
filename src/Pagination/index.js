import React from 'react';
import PropTypes from 'prop-types';
import PaginationPage from '../PaginationPage';

const Pagination = ({ children, ...rest }) => (
  <div className="fur-pagination" {...rest}>
    {children}
  </div>
);

Pagination.propTypes = {
  children: PropTypes.node.isRequired,
};

Pagination.Page = PaginationPage;

export default Pagination;
