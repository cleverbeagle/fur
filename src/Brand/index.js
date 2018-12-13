import React from 'react';
import PropTypes from 'prop-types';

const Brand = ({ className, onClick, children }) => (
  <button type="button" className={`fur-brand ${className}`} onClick={onClick}>
    {children}
  </button>
);

Brand.defaultProps = {
  onClick: null,
  className: '',
};

Brand.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Brand;
