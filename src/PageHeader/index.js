import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PageHeaderTitle from '../PageHeaderTitle';
import PageHeaderAction from '../PageHeaderAction';

const PageHeader = ({ className, children }) => (
  <div className={classNames('fur-page-header', className)}>{children}</div>
);

PageHeader.defaultProps = {
  className: null,
};

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

PageHeader.Title = PageHeaderTitle;
PageHeader.Action = PageHeaderAction;

export default PageHeader;
