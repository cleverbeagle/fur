import React from 'react';
import PropTypes from 'prop-types';

const PageHeaderTitle = ({ children }) => <h1 className="fur-page-header-title">{children}</h1>;

PageHeaderTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageHeaderTitle;
