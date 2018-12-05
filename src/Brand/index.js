import React from 'react';
import PropTypes from 'prop-types';

const Brand = ({ onClick, children }) => (
  <button type="button" className="fur-brand" onClick={onClick}>
    {children}
  </button>
);

Brand.defaultProps = {
  onClick: null,
};

Brand.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Brand;
