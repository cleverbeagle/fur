import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalBody = ({ children, className }) => (
  <div className={classNames('fur-modal-body', className)}>{children}</div>
);

ModalBody.defaultProps = {
  className: null,
};

ModalBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ModalBody;
