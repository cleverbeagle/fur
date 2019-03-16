import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PaginationPage = ({ children, active, ...rest }) => (
  <div
    className={classNames('fur-pagination-page', { 'fur-pagination-page-active': active })}
    {...rest}
  >
    {children}
  </div>
);

PaginationPage.defaultProps = {
  active: false,
};

PaginationPage.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
};

export default PaginationPage;
