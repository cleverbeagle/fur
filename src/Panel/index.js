import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ children }) => <div className="fur-panel">{children}</div>;
const PanelHeader = ({ children }) => <div className="fur-panel-header">{children}</div>;
const PanelBody = ({ children }) => <div className="fur-panel-body">{children}</div>;
const PanelFooter = ({ children }) => <div className="fur-panel-footer">{children}</div>;

Panel.propTypes = { children: PropTypes.node.isRequired };
PanelHeader.propTypes = { children: PropTypes.node.isRequired };
PanelBody.propTypes = { children: PropTypes.node.isRequired };
PanelFooter.propTypes = { children: PropTypes.node.isRequired };

Panel.Header = PanelHeader;
Panel.Body = PanelBody;
Panel.Footer = PanelFooter;

export default Panel;
