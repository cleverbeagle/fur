import React from 'react';
import PropTypes from 'prop-types';
import PageHeaderTitle from '../PageHeaderTitle';
import PageHeaderAction from '../PageHeaderAction';

const PageHeader = ({ children }) => <div className="fur-page-header">{children}</div>;

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

PageHeader.Title = PageHeaderTitle;
PageHeader.Action = PageHeaderAction;

export default PageHeader;
