import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Panel = ({ className, children }) => (
  <div className={classNames('fur-panel', className)}>{children}</div>
);

const PanelHeader = ({ className, children }) => (
  <div className={classNames('fur-panel-header', className)}>{children}</div>
);

const PanelBody = ({ className, children }) => (
  <div className={classNames('fur-panel-body', className)}>{children}</div>
);

const PanelFooter = ({ className, children }) => (
  <div className={classNames('fur-panel-footer', className)}>{children}</div>
);

Panel.defaultProps = {
  className: null,
};

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

PanelHeader.defaultProps = {
  className: null,
};

PanelHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

PanelBody.defaultProps = {
  className: null,
};

PanelBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

PanelFooter.defaultProps = {
  className: null,
};

PanelFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Panel.Header = PanelHeader;
Panel.Body = PanelBody;
Panel.Footer = PanelFooter;

export default Panel;
