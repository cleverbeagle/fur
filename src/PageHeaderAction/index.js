import React from 'react';
import PropTypes from 'prop-types';

const PageHeaderAction = ({ children }) => <div className="fur-page-header-action">{children}</div>;

PageHeaderAction.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageHeaderAction;
